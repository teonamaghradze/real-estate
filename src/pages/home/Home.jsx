import Searchbar from "../../components/searchbar/Searchbar";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="text-container">
        <h1>Discover a place you'll love to live</h1>
        <p>
          Get the best real estate deals first, before they hit the mass market!
          HOT FORECLOSURE DEALS with one simple search
        </p>
        <Searchbar />
      </div>

      <div className="image-container">
        <img src="/bg.jpg" alt="background" />
      </div>
    </div>
  );
}

export default Home;
