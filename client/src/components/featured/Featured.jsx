import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="science">Science</option>
            <option value="thriller">Thriller</option>
            <option value="animated">Animated</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/9899966/pexels-photo-9899966.jpeg"
        alt="Featured Content"
      />

      <div className="info">
        <img
          src="https://images.pexels.com/photos/3518659/pexels-photo-3518659.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="title"
        />
        <span className="desc">
          Lorem numquam error! Saepe sapiente aspernatur, nobis nulla ad sit eum
          eius. Natus pariatur ex, deleniti et molestias optio repudiandae,
          velit non ducimus minus veritatis repellendus. Fugiat explicabo.
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
