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
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2I5YTJlMTZhOWIyM2Y2MTE1MDc1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNTc2MjkyNywiZXhwIjoxNzM2MzY3NzI3fQ.8coiHnzP4LBETTLBcwb4T2Z_tPZdIFs9I-uSjct_7h8"
                     } // pass token here
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
            <Featured type={type} />
            {lists.map((list) => (
                <List key={list._id} list={list} />
            ))}
        </div>
    );
};
export default HomePage;
