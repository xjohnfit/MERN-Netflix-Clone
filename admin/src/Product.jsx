import Chart from "./Chart";
import { productData } from "./seeds/dummyData";
import { FileUpload } from "@mui/icons-material";

const Product = () => {
    return (
        <div className="flex-[6_6_0%] p-5">
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="text-3xl font-semibold">Product</h1>
                </div>
            </div>
            <div className="flex">
                <div className="flex-1">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="flex-1 p-5 m-5 shadow-lg">
                    <div className="flex items-center">
                        <img className="w-10 h-10 mr-5 rounded-full object-cover" src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.news_app_ed.jpg" alt="Product Image" />
                        <span className="font-semibold">Apple iPhone 15 Pro Max</span>
                    </div>
                    <div className="mt-3">
                        <div className="w-40 flex justify-between">
                            <span>ID:</span>
                            <span className="font-light">123</span>
                        </div>
                        <div className="w-40 flex justify-between">
                            <span>Sales:</span>
                            <span className="font-light">123</span>
                        </div>
                        <div className="w-40 flex justify-between">
                            <span>Active:</span>
                            <span className="font-light">Yes</span>
                        </div>
                        <div className="w-40 flex justify-between">
                            <span>In Stock:</span>
                            <span className="font-light">Yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex p-5 m-5 shadow-lg">
                <form className="flex justify-between w-full">
                    <div className="flex flex-col">
                        <label className="mb-3 text-gray-500" htmlFor="">Product Name:</label>
                        <input className="mb-3 p-1 outline-none border-b border-gray-400" type="text" placeholder="Apple iPhone 15 Pro Max" />
                        <label className="mb-3 text-gray-500" htmlFor="">In Stock:</label>
                        <select className="mb-3 outline-none" name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label className="mb-3 text-gray-500" htmlFor="">Active:</label>
                        <select className="mb-3 outline-none" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex items-center'>
                            <img className='w-64 h-64 rounded-xl object-cover mr-5' src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.news_app_ed.jpg" alt="Avatar" />
                            <label htmlFor="file"><FileUpload className='cursor-pointer m-10' /></label>
                            <input type="file" id="file" className='hidden' />
                        </div>
                        <button className='rounded-xl w-28 p-2 self-end cursor-pointer bg-blue-800 text-white font-semibold'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Product;