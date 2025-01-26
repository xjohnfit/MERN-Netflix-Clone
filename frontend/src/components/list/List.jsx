import './list.scss';
import { useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const List = ({list}) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`; // 230px is the width of the list item
        }
        if (direction === 'right' && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${
                -230 + distance
            }px)`; // 230px is the width of the list item
        }
    };

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon
                    className="sliderArrow left"
                    onClick={() => handleClick('left')}
                    style={{ display: !isMoved && 'none' }}
                />
                <div
                    className="containerList p-5"
                    ref={listRef}
                >
                    {list.content.map((item, i) => (
                        <ListItem index={i} key={i} item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlinedIcon
                    className="sliderArrow right"
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    );
};
export default List;
