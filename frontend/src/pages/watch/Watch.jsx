import "./watch.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackIosNewOutlinedIcon />
            Home
        </div>
        <video className="video" autoPlay progress controls muted src="/src/media/TheAmateur.mp4"></video>
    </div>
  )
}
export default Watch