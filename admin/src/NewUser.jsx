const NewUser = ({ open, onClose }) => {

    return (
        <div onClick={onClose} className={`fixed z-10 inset-0 flex justify-center items-center transition-colors${open ? "visible bg-black/50" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white p-10 rounded-xl shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} w-[500px]`}>
                <div>
                    <button onClick={onClose} className="absolute text-xl top-2 right-4 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">X</button>
                    <h1 className="text-2xl font-semibold">New User</h1>
                    <form className="flex flex-wrap">
                        <div className="w-full flex flex-col mt-3 mr-5">
                            <label className="text-sm font-semibold text-gray-600" htmlFor="">Username</label>
                            <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" placeholder="xjohnfit" />
                        </div>
                        <div className="w-full flex flex-col mt-3 mr-5">
                            <label className="text-sm font-semibold text-gray-600" htmlFor="">Full Name</label>
                            <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" placeholder="John Rocha" />
                        </div>
                        <div className="w-full flex flex-col mt-3 mr-5">
                            <label className="text-sm font-semibold text-gray-600" htmlFor="">Email</label>
                            <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="email" placeholder="xjohnfitcodes@gmail.com" />
                        </div>
                        <div className="w-full flex flex-col mt-3 mr-5">
                            <label className="text-sm font-semibold text-gray-600" htmlFor="">Password</label>
                            <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="password" placeholder="Password" />
                        </div>
                        <div className="w-full flex flex-col mt-3 mr-5">
                            <label className="text-sm font-semibold text-gray-600" htmlFor="">Phone</label>
                            <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" placeholder="+1 123 456 7890" />
                        </div>
                        <div className="w-full flex flex-col mt-3 mr-5">
                            <label className="text-sm font-semibold text-gray-600" htmlFor="">Address</label>
                            <input className="h-5 p-4 border border-solid border-gray-600 rounded-lg outline-none" type="text" placeholder="Boston, MA" />
                        </div>
                        <div className="w-full flex flex-col mt-3 mr-5">
                            <label className="text-sm font-semibold text-gray-600" htmlFor="">Gender</label>
                            <div>
                                <input className="mt-4" type="radio" name="gender" id="male" value="male" />
                                <label className="m-3 text-md text-gray-600" htmlFor="male">Male</label>
                                <input className="mt-4" type="radio" name="gender" id="female" value="female" />
                                <label className="m-3 text-md text-gray-600" htmlFor="female">Female</label>
                                <input className="mt-4" type="radio" name="gender" id="other" value="other" />
                                <label className="m-3 text-md text-gray-600" htmlFor="male">Whatever TF you are</label>
                            </div>
                        </div>
                        <div className="w-[400px] flex flex-col mt-3 mr-5">
                            <label htmlFor="">Active</label>
                            <select className="h-10 rounded-lg border border-solid text-gray-600 outline-none" name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="flex w-full justify-center">
                            <button className="w-[200px] border-none bg-blue-800 text-white px-3 py-2 font-semibold rounded-lg mt-8 cursor-pointer">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default NewUser;