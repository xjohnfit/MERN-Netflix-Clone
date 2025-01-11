import { CalendarToday, LocationOn, MailOutline, PermIdentity, PhoneAndroid, FileUpload } from '@mui/icons-material';

const User = () => {
  return (
    <div className="flex-[6_6_0%] p-5">

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Edit User</h1>
      </div>
      <div className="flex mt-10">
        <div className="flex-1 p-5 shadow-md">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full object-cover" src="/src/assets/User (3).jpg" alt="Avatar" />
            <div className="flex flex-col ml-5">
              <span className="font-semibold">CB</span>
              <span className="font-light">Software Engineer</span>
            </div>
          </div>
          <div className='mt-5'>
            <span className="font-semibold text-sm text-gray-400">Account Details</span>
            <div className='flex items-center mt-5 text-gray-700'>
              <PermIdentity className='!text-[20px]' />
              <span className="font-semibold ml-3">CB</span>
            </div>
            <div className='flex items-center mt-5 text-gray-700'>
              <CalendarToday className='!text-[20px] mb-5' />
              <span className="font-semibold ml-3 mb-5">02/16/1995</span>
            </div>
            <span className="font-semibold text-sm text-gray-400">Contact Details</span>
            <div className='flex items-center mt-5 text-gray-700'>
              <PhoneAndroid className='!text-[20px]' />
              <span className="font-semibold ml-3">+1 111 111 1111</span>
            </div>
            <div className='flex items-center mt-5 text-gray-700'>
              <MailOutline className='!text-[20px]' />
              <span className="font-semibold ml-3">cb@cb.com</span>
            </div>
            <div className='flex items-center mt-5 text-gray-700'>
              <LocationOn className='!text-[20px]' />
              <span className="font-semibold ml-3">Boston, MA</span>
            </div>
          </div>
        </div>
        <div className="flex-[4_4_0%] p-5 ml-5 shadow-md">
          <span className='text-2xl font-semibold'>Edit</span>
          <form className='flex justify-between mt-5'>
            <div>
              <div className='flex flex-col mt-3'>
                <label className='mb-1 text-sm'>Username</label>
                <input className=' w-64 h-8 border-b border-gray-400 outline-none' type="text" placeholder="CB" />
              </div>
              <div className='flex flex-col mt-3'>
                <label className='mb-1 text-sm'>Full Name</label>
                <input className=' w-64 h-8 border-b border-gray-400 outline-none' type="text" placeholder="CB" />
              </div>
              <div className='flex flex-col mt-3'>
                <label className='mb-1 text-sm'>Email</label>
                <input className=' w-64 h-8 border-b border-gray-400 outline-none' type="text" placeholder="cb@cb.com" />
              </div>
              <div className='flex flex-col mt-3'>
                <label className='mb-1 text-sm'>Phone</label>
                <input className=' w-64 h-8 border-b border-gray-400 outline-none' type="text" placeholder="+1 111 111 1111" />
              </div>
              <div className='flex flex-col mt-3'>
                <label className='mb-1 text-sm'>Address</label>
                <input className=' w-64 h-8 border-b border-gray-400 outline-none' type="text" placeholder="Boston, MA" />
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <div className='flex items-center'>
                <img className='w-64 h-64 rounded-xl object-cover mr-5' src="/src/assets/User (3).jpg" alt="Avatar" />
                <label htmlFor="file"><FileUpload className='cursor-pointer m-10' /></label>
                <input type="file" id="file" className='hidden' />
              </div>
              <button className='rounded-xl w-28 p-2 self-end cursor-pointer bg-blue-800 text-white font-semibold'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;