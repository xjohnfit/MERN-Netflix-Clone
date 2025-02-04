import './featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({});
    useEffect(() => {
        // console.log('Bearer ' + JSON.parse(localStorage.getItem('user')).token);
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/movies/random?type=${type}`, {
                    headers: {
                        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
                    }, // pass token here);
                });
                setContent(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getRandomContent();
    }, [type]);

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? 'Movies' : 'Shows'}</span>
                    <select
                        defaultValue={'default'}
                        name="genre"
                        id="genre"
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        <option value="default" disabled>Genre</option>
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
                </div>
            )}
            <img
                className=''
                src={content?.img}
                alt=""
            />
            <div className="info">
                {
                    content?.imgTitle && (
                        <img
                            className='w-[40vw]'
                            src={content.imgTitle}
                            alt="Image Title"
                        />
                    )
                }

                <span className="desc w-[40vw]">
                    {content?.desc}
                </span>

                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Featured;
