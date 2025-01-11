import "./watch.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Link, useLocation } from "react-router-dom";

const Watch = () => {

  const location = useLocation();
  const movie = location.state.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
            <ArrowBackIosNewOutlinedIcon />
            Home
        </div>
      </Link>
        <video className="video" autoPlay progress="true" controls muted src={movie.video}></video>
    </div>
  )
}
export default Watch