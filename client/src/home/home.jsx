import "./home.scss";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        width="100%"
        src="https://images.pexels.com/photos/9899966/pexels-photo-9899966.jpeg"
        alt=""
      />
    </div>
  );
};

export default Home;
