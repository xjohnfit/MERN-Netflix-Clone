import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';

const Featured = () => {
    return (
        <div className='w-full flex justify-between'>
            <div className='flex-1 m-5 p-8 rounded-xl cursor-pointer shadow-xl'>
                <span className='text-xl'>Revenue</span>
                <div className='my-3 flex items-center'>
                    <span className='text-3xl font-bold'>$2.545.23</span>
                    <span className='flex items-center ml-5'>-25.69 <ArrowDownwardOutlined className='text-sm ml-1 text-red-500' /></span>
                </div>
                <span className='text-lg '>Compared to last month</span>
            </div>

            <div className='flex-1 m-5 p-8 rounded-xl cursor-pointer shadow-xl'>
                <span className='text-xl'>Revenue</span>
                <div className='my-3 flex items-center'>
                    <span className='text-3xl font-bold'>$2.545.23</span>
                    <span className='flex items-center ml-5'>-25.69 <ArrowDownwardOutlined className='text-sm ml-1 text-red-500' /></span>
                </div>
                <span className='text-lg '>Compared to last month</span>
            </div>

            <div className='flex-1 m-5 p-8 rounded-xl cursor-pointer shadow-xl'>
                <span className='text-xl'>Revenue</span>
                <div className='my-3 flex items-center'>
                    <span className='text-3xl font-bold'>$2.545.23</span>
                    <span className='flex items-center ml-5'>582.25 <ArrowUpwardOutlined className='text-sm ml-1 text-green-500' /></span>
                </div>
                <span className='text-lg '>Compared to last month</span>
            </div>
        </div>
    );
};
export default Featured;