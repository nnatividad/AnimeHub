import "./Home.css";
import NavBar from "./NavBar.js";

function Home(){
    return(
        <div className="BackGroundImage">
            <img src={process.env.PUBLIC_URL + '/RosehackLogo.png'} alt= "RoseHackLogo" className = "Logo" />
            <div className="ContentContainer">
                <>
                    <NavBar/>
                </>
            <div className="TitleContainter">
                <h1>AnimeHub</h1>
                <p>By Nate Natividad and Vincent Vo</p>
            </div>
        </div>
      </div>
    );
}

export default Home;