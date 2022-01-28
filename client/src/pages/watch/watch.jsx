import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import video from "../../videos/Lion walk.mp4";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video className="video" controls autoPlay>
        <source src={video} />
      </video>
    </div>
  );
};

export default Watch;
