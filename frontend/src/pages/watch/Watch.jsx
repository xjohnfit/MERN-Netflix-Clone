import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Link, useLocation } from "react-router-dom";

const Watch = () => {

  const location = useLocation();
  const movie = location.state.movie;
  return (
    <div className="w-screen h-screen">
      <Link to="/">
        <div className="flex items-center absolute top-4 left-3 text-white cursor-pointer z-10">
            <ArrowBackIosNewOutlinedIcon />
            Home
        </div>
      </Link>
        <video className="w-full h-full object-cover" autoPlay progress="true" controls muted src={movie.video}></video>
    </div>
  )
}
export default Watch