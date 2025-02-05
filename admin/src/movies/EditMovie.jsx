import { FileUpload, Slideshow } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateMovie } from '../context/movieContext/MovieApiControllers';
import { MovieContext } from '../context/movieContext/MovieContext';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useLocation } from 'react-router-dom';

const EditMovie = () => {
    const { dispatch, successMessage, error, movies } = useContext(MovieContext);
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage, { duration: 4000 });
            setTimeout(() => {
                navigate('/movies');
            window.location.reload();
            }, 1000);
        }
    }, [successMessage, movies, error]);

    const [movie, setMovie] = useState(state.movie);

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

    const upload = (items) => {
        setUploading(true);
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

            setUploading(false);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (img == '') {
            toast.error('Please select an image');
            return;
        }

        if (uploading == true) {
            toast.loading('Uploading...', { duration: 4000 });
        }

        //call the upload function and pass the files to it
        upload([
            { file: img, label: 'img' },
            { file: imgTitle, label: 'imgTitle' },
            { file: imgThumbnail, label: 'imgThumbnail' },
            { file: trailer, label: 'trailer' },
            { file: video, label: 'video' },
        ]);
        if ((uploaded) => 1) {
            toast.success('Uploaded successfully!', { duration: 4000 });
        }
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

        if (!movie.type) {
            toast.error('Type (Show or Movie) is required');
            return;
        }

        if (!movie.status) {
            toast.error('Status is required: Active or Inactive?');
            return;
        }

        updateMovie(movie, dispatch);

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
                        Editing Movie:{' '}
                        <span className="text-red-700 text-3xl font-bold">
                            {movie.title}
                        </span>
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
                                onChange={(e) =>
                                    setMovie({
                                        ...movie,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className="w-full outline-none border-b border-gray-400"
                                name="title"
                                value={movie.title}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Year:</span>
                            <input
                                type="number"
                                onChange={(e) =>
                                    setMovie({
                                        ...movie,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className="w-full outline-none border-b border-gray-400"
                                name="year"
                                value={movie.year}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">
                                Duration:
                            </span>
                            <input
                                type="number"
                                onChange={(e) =>
                                    setMovie({
                                        ...movie,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className="w-full outline-none border-b border-gray-400"
                                name="duration"
                                value={movie.duration}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Limit:</span>
                            <input
                                type="number"
                                onChange={(e) =>
                                    setMovie({
                                        ...movie,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className=" w-full outline-none border-b border-gray-400"
                                name="limit"
                                value={movie.limit}
                            />
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">
                                Description:
                            </span>
                            <textarea
                                onChange={(e) =>
                                    setMovie({
                                        ...movie,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className="w-full resize-none outline-none border-b border-gray-400"
                                name="desc"
                                value={movie.desc}
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Genre:</span>
                            <select
                                value={movie.genre}
                                onChange={(e) =>
                                    setMovie({
                                        ...movie,
                                        [e.target.name]: e.target.value,
                                    })
                                }
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
                                value={movie.type == true ? 'true' : 'false'}
                                onChange={(e) =>
                                    setMovie({
                                        ...movie,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className="w-full outline-none border-b border-gray-400"
                                name="type"
                            >
                                <option
                                    value="default"
                                    disabled="disabled"
                                >
                                    Is Show?
                                </option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-center mb-5">
                            <span className="w-40 font-semibold">Status:</span>
                            <select
                                value={movie.status}
                                onChange={(e) =>
                                    setMovie({
                                        ...movie,
                                        [e.target.name]: e.target.value,
                                    })
                                }
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
                        <div className="flex flex-col justify-center items-center">
                            {showImg == '' ? (
                                <img
                                    src={state.movie.img}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            ) : (
                                <img
                                    src={showImg}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            )}
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

                        <div className="flex flex-col justify-center items-center">
                            {showImgTitle == '' &&
                            state.movie.imgTitle == null ? (
                                <Slideshow className="!w-40 !h-40 !object-fill !rounded-lg !mb-3" />
                            ) : showImgTitle == '' && state.movie.imgTitle ? (
                                <img
                                    src={state.movie.imgTitle}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            ) : (
                                <img
                                    src={showImgTitle}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            )}
                            <label
                                className="border p-3 cursor-pointer rounded-md text-center"
                                htmlFor="imgTitle"
                            >
                                <FileUpload className="cursor-pointer" />
                                Select Title Image
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

                        <div className="flex flex-col justify-center items-center">
                            {showImgThumbnail == '' &&
                            state.movie.imgThumbnail == null ? (
                                <Slideshow className="!w-40 !h-40 !object-fill !rounded-lg !mb-3" />
                            ) : showImgThumbnail == '' &&
                              state.movie.imgThumbnail ? (
                                <img
                                    src={state.movie.imgThumbnail}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            ) : (
                                <img
                                    src={showImgThumbnail}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            )}
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
                                            setImgThumbnail(e.target.files[0]);
                                    }}
                                />
                            </>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            {showTrailer == '' &&
                            state.movie.trailer == null ? (
                                <Slideshow className="!w-40 !h-40 !object-fill !rounded-lg !mb-3" />
                            ) : showTrailer == '' && state.movie.trailer ? (
                                <img
                                    src={state.movie.trailer}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            ) : (
                                <img
                                    src={showTrailer}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            )}
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
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            {showVideo == '' && state.movie.video == null ? (
                                <Slideshow className="!w-40 !h-40 !object-fill !rounded-lg !mb-3" />
                            ) : showVideo == '' && state.movie.video ? (
                                <img
                                    src={state.movie.video}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            ) : (
                                <img
                                    src={showVideo}
                                    alt=""
                                    className="w-40 h-40 object-fill rounded-lg mb-3"
                                />
                            )}
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
                        </div>
                    </div>
                    <div className="flex mt-5 justify-around w-full">
                        <button
                            className={`rounded-xl w-48 p-2 ${
                                uploaded == 0
                                    ? 'cursor-pointer bg-blue-400 hover:bg-blue-800'
                                    : 'bg-gray-300'
                            } text-white font-semibold`}
                            onClick={handleUpload}
                            disabled={uploaded >= 1 ? true : false}
                        >
                            {uploading ? 'Uploading...' : 'Upload Images'}
                        </button>

                        {uploading == false ? (
                            <button
                                className="rounded-xl w-48 p-2 cursor-pointer bg-blue-400 hover:bg-blue-800 text-white font-semibold"
                                onClick={handleSubmit}
                            >
                                Update Movie
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
export default EditMovie;
