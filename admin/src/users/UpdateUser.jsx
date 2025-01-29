import { FileUpload } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "../firebase";

import { createUser } from "../context/userContext/UserApiControllers";
import { UserContext } from "../context/userContext/UserContext";

const UpdateUser = () => {

  const { state } = useLocation();

  const [user, setUser] = useState({});
  const [profilePic, setProfilePic] = useState('');
  const [uploaded, setUploaded] = useState(0);
  const [profilePicUrl, setProfilePicUrl] = useState([]);

  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload({ file: profilePic, label: "profilePic" });
  };

  const upload = (photo) => {

    const fileName = new Date().getTime() + photo.file.name;

    const imageRef = ref(storage, `profileImages/${fileName}`);
    uploadBytes(imageRef, photo.file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {

        setUser((prevState) => {
          return { ...prevState, [photo.label]: url };
        });
        setUploaded((prevState) => prevState + 1);
        setProfilePicUrl((prevState) => [...prevState, url]);
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user, dispatch);
  };

  return (
    <div className="flex-[6_6_0%] p-5">

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Edit User</h1>
      </div>
      <div className="flex">
        <div className="flex-[4_4_0%] p-5 ml-5">
          <form className="flex flex-col gap-5 mt-5">
            <div className="flex gap-20">
              <div className="flex flex-col">
                <div className="">
                  <div className="w-full flex flex-col mt-3 mr-5">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="">ID:</label>
                    <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" name="id" placeholder={state.user._id} disabled />
                  </div>
                  <div className="w-full flex flex-col mt-3 mr-5">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="">Username</label>
                    <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" name="username" onChange={handleChange} placeholder={state.user.username} />
                  </div>
                  <div className="w-full flex flex-col mt-3 mr-5">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="">Full Name</label>
                    <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" name="fullName" onChange={handleChange} placeholder={state.user.fullName} />
                  </div>
                  <div className="w-full flex flex-col mt-3 mr-5">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="">Email</label>
                    <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="email" name="email" onChange={handleChange} placeholder={state.user.email} />
                  </div>
                  <div className="w-full flex flex-col mt-3 mr-5">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="">Password</label>
                    <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="password" name="password" onChange={handleChange} placeholder={state.user.password} />
                  </div>
                  <div className="w-full flex flex-col mt-3 mr-5">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="">Address</label>
                    <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" name="address" onChange={handleChange} placeholder={state.user.address} />
                  </div>
                  <div className="w-full flex flex-col mt-3 mr-5">
                    <label className="text-sm font-semibold text-gray-600" htmlFor="">Gender</label>
                    <div>
                      {
                        state.user.gender == 'male' ?
                          (<>
                            <input className="mt-4" type="radio" name="gender" id="male" value="male" onChange={handleChange} checked />
                            <label className="m-3 text-md text-gray-600" htmlFor="male">Male</label>
                            <input className="mt-4" type="radio" name="gender" id="female" value="female" onChange={handleChange} />
                            <label className="m-3 text-md text-gray-600" htmlFor="female">Female</label>

                          </>) :
                          (<>
                            <input className="mt-4" type="radio" name="gender" id="male" value="male" onChange={handleChange} />
                            <label className="m-3 text-md text-gray-600" htmlFor="male">Male</label>
                            <input className="mt-4" type="radio" name="gender" id="female" value="female" onChange={handleChange} checked />
                            <label className="m-3 text-md text-gray-600" htmlFor="female">Female</label>
                          </>)
                      }
                    </div>
                  </div>
                  <div className="w-[400px] flex flex-col mt-3 mr-5">
                    <select defaultValue={state.user.isAdmin == 'true' ? 'true' : 'false'} className="h-10 rounded-lg border border-solid text-gray-600 outline-none mb-5" name="isAdmin" onChange={handleChange} id="isAdmin">
                      <option value="default" disabled>Admin</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 justify-center items-center">

                {profilePicUrl?.map((url, index) => {
                  return <img src={url} key={index} className="w-48 h-50 object-fit" />;
                })}

                {profilePic == 0 ?

                  (<>
                    <label className="border cursor-pointer p-2 rounded-lg" htmlFor="profilePic"><FileUpload className='cursor-pointer' />{profilePic === '' ? 'Profile Image' : profilePic.name}</label>
                    <input type="file" className="hidden" name="profilePic" id="profilePic" onChange={e => setProfilePic(e.target.files[0])} />
                  </>
                  ) : (<span className="font-semibold text-slate-400">Profile Photo Selected</span>)

                }

              </div>

            </div>
            <div className="flex w-full justify-center mt-5">
              {uploaded == 1 ?
                (<button className='rounded-xl w-44 p-2 cursor-pointer bg-blue-800 text-white font-semibold' onClick={handleSubmit}>Create New User</button>) :
                (<button className='rounded-xl w-44 p-2 cursor-pointer bg-blue-800 hover:bg-green-600 text-white font-semibold' onClick={handleUpload}>Upload Profile Photo</button>)
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateUser;