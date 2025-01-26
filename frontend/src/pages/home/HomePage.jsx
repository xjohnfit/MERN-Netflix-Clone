import './home.scss';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from "axios";

const HomePage = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {           
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: import.meta.env.VITE_TOKEN
                     }
                });
                setLists(res.data);
            } catch (error) {
                console.log(error)
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre} />
            {lists.map((list) => (
                <List key={list._id} list={list} />
            ))}
        </div>
    );
};
export default HomePage;
