import { FileUpload } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createMovie } from '../context/movieContext/MovieApiControllers';
import { MovieContext } from '../context/movieContext/MovieContext';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const NewMovie = ({ open, onClose }) => {
    useEffect(() => {
        if (message) {
            toast.success('Movie created successfully');
        } else if (error) {
            toast.error('Something went wrong');
        }
    }, []);

    const [movie, setMovie] = useState({});
    const [img, setImg] = useState('');
    const [imgTitle, setImgTitle] = useState('');
    const [imgThumbnail, setImgThumbnail] = useState('');
    const [trailer, setTrailer] = useState('');
    const [video, setVideo] = useState('');
    const [uploaded, setUploaded] = useState(0);
    const [imageUrls, setImageUrls] = useState([]);

    const [uploading, setUploading] = useState(false);

    const [showImg, setShowImg] = useState('');
    const [showImgTitle, setShowImgTitle] = useState('');
    const [showImgThumbnail, setShowImgThumbnail] = useState('');
    const [showTrailer, setShowTrailer] = useState('');
    const [showVideo, setShowVideo] = useState('');

    const { dispatch, message, error } = useContext(MovieContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
    };

    const upload = (items) => {
        items.filter((item) => item.file != '').forEach((item) => {
            const fileName = uuidv4();

            const imageRef = ref(storage, `netflixCloneImages/${fileName}`);
            uploadBytes(imageRef, item.file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setMovie((prevState) => {
                        return { ...prevState, [item.label]: url };
                    });
                    setUploaded((prevState) => prevState + 1);
                    setImageUrls((prevState) => [...prevState, url]);
                });
            });
        });
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (img == '') {
            toast.error('Please select an image');
            return;
        }

        setUploading(true);
        //call the upload function and pass the files to it
        upload([
            { file: img, label: 'img' },
            { file: imgTitle, label: 'imgTitle' },
            { file: imgThumbnail, label: 'imgThumbnail' },
            { file: trailer, label: 'trailer' },
            { file: video, label: 'video' },
        ]);
        setUploading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!movie.title) {
            toast.error('Title is required');
            return;
        }

        if (!movie.year) {
            toast.error('Year is required');
            return;
        }

        if (!movie.duration) {
            toast.error('Duration is required');
            return;
        }

        if (!movie.limit) {
            toast.error('Limit is required');
            return;
        }

        if (!movie.desc) {
            toast.error('Description is required');
            return;
        }

        if (!movie.genre) {
            toast.error('Genre is required');
            return;
        }

        if (!movie.isShow) {
            toast.error('Type (Show or Movie) is required');
            return;
        }

        if (!movie.status) {
            toast.error('Status is required: Active or Inactive?');
            return;
        }

        createMovie(movie, dispatch);
        setTimeout(() => {
            onClose();
        }, 1000);
    };

    return (
        <div
            onClick={onClose}
            className={`fixed z-10 inset-0 flex justify-center items-center transition-colors${
                open ? 'visible bg-black/50' : 'invisible'
            }`}
        >
            <Toaster
                position="bottom-left"
                toastOptions={{
                    style: {
                        fontSize: '16px',
                        padding: '15px 25px',
                        color: '#fff',
                        background: '#333',
                    },
                }}
            />
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white p-10 rounded-xl shadow transition-all ${
                    open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
                } flex w-[1100px] h-[800px]`}
            >
                <div className="relative w-full h-full flex flex-col justify-between">
                    <button
                        onClick={onClose}
                        className="absolute text-xl -top-6 -right-4 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 hover:font-bold"
                    >
                        X
                    </button>
                    <h1 className="text-2xl font-semibold pb-5">New Movie</h1>

                    <form className="flex justify-between w-full h-full">
                        <div className="flex flex-col w-[100%] h-[100%] items-center justify-evenly">
                            <input
                                type="text"
                                onChange={handleChange}
                                className="w-full mb-3 p-1 outline-none border-b border-gray-400"
                                name="title"
                                placeholder="Movie Title"
                            />

                            <input
                                type="number"
                                onChange={handleChange}
                                className="w-full mb-3 p-1 outline-none border-b border-gray-400"
                                name="year"
                                placeholder="Year"
                            />

                            <input
                                type="number"
                                onChange={handleChange}
                                className="w-full mb-3 p-1 outline-none border-b border-gray-400"
                                name="duration"
                                placeholder="Duration"
                            />

                            <input
                                type="number"
                                onChange={handleChange}
                                className=" w-full mb-3 p-1 outline-none border-b border-gray-400"
                                name="limit"
                                placeholder="Limit"
                            />

                            <textarea
                                onChange={handleChange}
                                className="w-full resize-none mb-3 p-1 outline-none border-b border-gray-400"
                                name="desc"
                                placeholder="Description"
                            ></textarea>

                            <select
                                defaultValue={'default'}
                                onChange={handleChange}
                                className="w-full mb-3 outline-none border-b border-gray-400"
                                name="genre"
                            >
                                <option
                                    value="default"
                                    disabled="disabled"
                                >
                                    Genre
                                </option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Historical">Historical</option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                                <option value="Sci-Fi">Sci-fi</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Western">Western</option>
                                <option value="Animation">Animation</option>
                                <option value="Drama">Drama</option>
                                <option value="Documentary">Documentary</option>
                            </select>

                            <select
                                defaultValue={'default'}
                                onChange={handleChange}
                                className="w-full mb-3 outline-none border-b border-gray-400"
                                name="isShow"
                            >
                                <option
                                    value="default"
                                    disabled="disabled"
                                >
                                    Is Show?
                                </option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>

                            <select
                                defaultValue={'default'}
                                onChange={handleChange}
                                className="w-full mb-3 outline-none border-b border-gray-400"
                                name="status"
                            >
                                <option
                                    value="default"
                                    disabled="disabled"
                                >
                                    Active?
                                </option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-full h-full items-end justify-evenly">
                            <div className="flex">
                                {showImg !== '' ? (
                                    <img
                                        src={showImg}
                                        alt=""
                                        className="w-20 h-20 object-cover"
                                    />
                                ) : (
                                    <>
                                        <label
                                            className="border p-3 cursor-pointer"
                                            htmlFor="img"
                                        >
                                            <FileUpload className="cursor-pointer" />
                                            Select Image
                                        </label>
                                        <input
                                            type="file"
                                            className="hidden"
                                            name="img"
                                            id="img"
                                            onChange={(e) => {
                                                setShowImg(
                                                    e.target.files[0]
                                                        ? URL.createObjectURL(
                                                              e.target.files[0]
                                                          )
                                                        : undefined
                                                ),
                                                    setImg(e.target.files[0]);
                                            }}
                                        />
                                    </>
                                )}
                            </div>

                            <div className="flex">
                                {showImgTitle !== '' ? (
                                    <img
                                        src={showImgTitle}
                                        alt=""
                                        className="w-20 h-20 object-cover"
                                    />
                                ) : (
                                    <>
                                        <label
                                            className="border p-3 cursor-pointer"
                                            htmlFor="imgTitle"
                                        >
                                            <FileUpload className="cursor-pointer" />
                                            Select Image Title
                                        </label>
                                        <input
                                            type="file"
                                            className="hidden"
                                            name="imgTitle"
                                            id="imgTitle"
                                            onChange={(e) => {
                                                setShowImgTitle(
                                                    e.target.files[0]
                                                        ? URL.createObjectURL(
                                                              e.target.files[0]
                                                          )
                                                        : undefined
                                                ),
                                                    setImgTitle(
                                                        e.target.files[0]
                                                    );
                                            }}
                                        />
                                    </>
                                )}
                            </div>

                            <div className="flex">
                                {showImgThumbnail !== '' ? (
                                    <img
                                        src={showImgThumbnail}
                                        alt=""
                                        className="w-20 h-20 object-cover"
                                    />
                                ) : (
                                    <>
                                        <label
                                            className="border p-3 cursor-pointer"
                                            htmlFor="imgThumbnail"
                                        >
                                            <FileUpload className="cursor-pointer" />
                                            Select Thumbnail
                                        </label>
                                        <input
                                            type="file"
                                            className="hidden"
                                            name="imgThumbnail"
                                            id="imgThumbnail"
                                            onChange={(e) => {
                                                setShowImgThumbnail(
                                                    e.target.files[0]
                                                        ? URL.createObjectURL(
                                                              e.target.files[0]
                                                          )
                                                        : undefined
                                                ),
                                                    setImgThumbnail(
                                                        e.target.files[0]
                                                    );
                                            }}
                                        />
                                    </>
                                )}
                            </div>

                            <div className="flex">
                                {showTrailer !== '' ? (
                                    <img
                                        src={showTrailer}
                                        alt=""
                                        className="w-20 h-20 object-cover"
                                    />
                                ) : (
                                    <>
                                        <label
                                            className="border p-3 cursor-pointer"
                                            htmlFor="trailer"
                                        >
                                            <FileUpload className="cursor-pointer" />
                                            Select Trailer
                                        </label>
                                        <input
                                            type="file"
                                            className="hidden"
                                            name="trailer"
                                            id="trailer"
                                            onChange={(e) => {
                                                setShowTrailer(
                                                    e.target.files[0]
                                                        ? URL.createObjectURL(
                                                              e.target.files[0]
                                                          )
                                                        : undefined
                                                ),
                                                    setTrailer(
                                                        e.target.files[0]
                                                    );
                                            }}
                                        />
                                    </>
                                )}
                            </div>

                            <div className="flex">
                                {showVideo !== '' ? (
                                    <img
                                        src={showVideo}
                                        alt=""
                                        className="w-20 h-20 object-cover"
                                    />
                                ) : (
                                    <>
                                        <label
                                            className="border p-3 cursor-pointer"
                                            htmlFor="video"
                                        >
                                            <FileUpload className="cursor-pointer" />
                                            Select Video
                                        </label>
                                        <input
                                            type="file"
                                            className="hidden"
                                            name="video"
                                            id="video"
                                            onChange={(e) => {
                                                setShowVideo(
                                                    e.target.files[0]
                                                        ? URL.createObjectURL(
                                                              e.target.files[0]
                                                          )
                                                        : undefined
                                                ),
                                                    setVideo(e.target.files[0]);
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </form>

                    <div className="flex w-full flex-col gap-5 items-center mt-20">
                        <div>
                            {uploaded >= 1 ? (
                                <button
                                    className="rounded-xl w-48 p-2 cursor-pointer bg-blue-800 hover:bg-green-500 text-white font-semibold"
                                    onClick={handleSubmit}
                                >
                                    Create Movie
                                </button>
                            ) : (
                                <button
                                    className="rounded-xl w-48 p-2 cursor-pointer bg-blue-800 hover:bg-green-500 text-white font-semibold"
                                    onClick={handleUpload}
                                >
                                    Upload Files
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewMovie;
