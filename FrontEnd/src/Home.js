import Background from "./BackGround.js";
import Card from "./Card.js";
import Grid from "./Grid.js";

function Home() {
    return(
        <div>
            <Background/>
            <Grid>
                <Card image="JJK.png" title="Jujutsu Kaisen: Season 2"/>
                <Card image="bleach.jpg" title="Bleach"/>
                <Card image="naruto.jpg" title="Naruto"/>
                <Card image="aot.jpg" title="Attack on Titan"/>
            </Grid>
        </div>
    );
}

export default Home;