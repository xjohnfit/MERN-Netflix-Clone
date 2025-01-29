import { FileUpload } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createMovie } from '../context/movieContext/MovieApiControllers';
import { MovieContext } from '../context/movieContext/MovieContext';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';

const EditMovie = () => {
    const { state } = useLocation();

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
        items
            .filter((item) => item.file != '')
            .forEach((item) => {
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
        <div className="flex-[6_6_0%] p-5">
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
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="text-3xl font-semibold">
                        Editing Movie: {state.movie.title}
                    </h1>
                </div>
            </div>
            <div className="flex p-5 m-5">
                <form className="flex flex-col w-full h-full">
                    <div className="flex flex-col w-[100%] h-[100%]">
                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Title:</span>
                            <input
                                type="text"
                                onChange={handleChange}
                                className="w-full outline-none border-b border-gray-400"
                                name="title"
                                value={state.movie.title}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Year:</span>
                            <input
                                type="number"
                                onChange={handleChange}
                                className="w-full outline-none border-b border-gray-400"
                                name="year"
                                value={state.movie.year}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">
                                Duration:
                            </span>
                            <input
                                type="number"
                                onChange={handleChange}
                                className="w-full outline-none border-b border-gray-400"
                                name="duration"
                                value={state.movie.duration}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Limit:</span>
                            <input
                                type="number"
                                onChange={handleChange}
                                className=" w-full outline-none border-b border-gray-400"
                                name="limit"
                                value={state.movie.limit}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">
                                Description:
                            </span>
                            <textarea
                                onChange={handleChange}
                                className="w-full resize-none outline-none border-b border-gray-400"
                                name="desc"
                                value={state.movie.desc}
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Genre:</span>
                            <select
                                defaultValue={
                                    state.movie.genre
                                        ? state.movie.title
                                        : 'default'
                                }
                                onChange={handleChange}
                                className="w-full outline-none border-b border-gray-400"
                                name="genre"
                            >
                                <option
                                    value="default"
                                    disabled="disabled"
                                >
                                    Genre
                                </option>
                                <option value="Action">Action</option>
                                <option value="Animation">Animation</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Drama">Drama</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Historical">Historical</option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                                <option value="Sci-Fi">Sci-fi</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Western">Western</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Is Show?</span>
                            <select
                                defaultValue={
                                    state.movie.isShow === true ? 'yes' : 'no'
                                }
                                onChange={handleChange}
                                className="w-full outline-none border-b border-gray-400"
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
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Status:</span>
                            <select
                                defaultValue={
                                    state.movie.status === true
                                        ? 'true'
                                        : 'false'
                                }
                                onChange={handleChange}
                                className="w-full outline-none border-b border-gray-400"
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
                    </div>
                    <div className="flex mt-10 w-full h-full justify-evenly">
                        <div className="flex flex-col">
                            <img
                                src={state.movie.img}
                                alt=""
                                className="w-40 h-40 object-fill rounded-lg mb-3"
                            />
                            <label
                                className="border p-3 cursor-pointer rounded-md text-center"
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
                        </div>

                        <div className="flex">
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
                                        setImgTitle(e.target.files[0]);
                                }}
                            />
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
                                                setTrailer(e.target.files[0]);
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
                    <div className="flex justify-center mt-40">
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
                                Upload Images
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
export default EditMovie;
