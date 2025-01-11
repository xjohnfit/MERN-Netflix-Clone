import { FileUpload } from "@mui/icons-material";

const NewUser = ({ open, onClose }) => {

    return (
        <div onClick={onClose} className={`fixed z-10 inset-0 flex justify-center items-center transition-colors${open ? "visible bg-black/50" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-white p-10 rounded-xl shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} w-fit`}>
                <div>
                    <button onClick={onClose} className="absolute text-xl top-2 right-4 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">X</button>
                    <h1 className="text-2xl font-semibold">New Product</h1>

                    <form className="flex justify-between gap-10 w-full">
                        <div className="flex flex-col">
                            <label className="text-gray-500" htmlFor="">Product Name:</label>
                            <input className="mb-3 p-1 outline-none border-b border-gray-400" type="text" placeholder="Apple iPhone 15 Pro Max" />
                            <label className="mb-3 text-gray-500" htmlFor="">In Stock:</label>
                            <select className="mb-3 outline-none border-b border-gray-400" name="inStock" id="inStock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <label className="mb-3 text-gray-500" htmlFor="">Active:</label>
                            <select className="mb-3 outline-none border-b border-gray-400" name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className='flex flex-col justify-evenly items-center'>
                            <div className='flex items-center flex-col'>
                                <label className="border p-3 cursor-pointer" htmlFor="file"><FileUpload className='cursor-pointer' />Select Product Image</label>
                                <input type="file" id="file" className="hidden" />
                            </div>
                            <button className='rounded-xl w-28 p-2 cursor-pointer bg-blue-800 text-white font-semibold'>Create</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};
export default NewUser;