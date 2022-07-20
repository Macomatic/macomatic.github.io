import "../assets/styles/styles.css"
import { useLocation } from "react-router-dom";
import  { Link } from "react-router-dom"

export default function TennisCourt() {

    const location = useLocation();
    const courtID = location.state.id;
    const lang = location.state.lang;
    var goBackButton;
    if (lang == "fr") {
        goBackButton = <Link to="/findacourtfr"><button className="customButton">Go back</button></Link>
    }
    else {
        goBackButton = <Link to="/findacourt"><button className="customButton">Go back</button></Link>
    }
    var courtInfo;
    if (courtID == 1) {
        courtInfo = 
            <div>
                <h1>Glennfield Court</h1>
                <div className="grid">
                    <div>
                        <h2>Court Information</h2>
                        <h3>Address: 123 Glennfield St. K1S 0K7</h3>
                        <h3>Hours of Operation: Morning</h3>
                        <h3>Access Type: Public</h3>
                        <h3>Court Surface: Grass</h3>
                        <h3>Popularity: Usually Empty</h3>
                        <h3>No Court Lights</h3>
                    </div>
                    <div>
                        <h2>Map Location</h2>
                        <a href="https://www.google.com/maps/dir//235+McArthur+Ave.,+Vanier,+ON+K1L+6P3/@45.4326626,-75.6576937,18z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cce05695971987d:0xd10e8b720f84c0a2!2m2!1d-75.6580574!2d45.4328229!3e0" target="_blank">
                            <img src={require('../assets/images/court1.png') } width="400" height="400" />
                        </a>
                        <p>Click the image to view on Google Maps</p>
                    </div>  
                    
                </div>
                <br /><br /><br />
                {goBackButton}
            </div>
    }
    else if (courtID == 2) { 
        courtInfo = 
            <div>
                <h1>Allen-Smith Court</h1>
                <div className="grid">
                    <div>
                        <h2>Court Information</h2>
                        <h3>Address: 456 Allen-Smith Dr. K1S 5L2</h3>
                        <h3>Hours of Operation: Afternoon</h3>
                        <h3>Access Type: Public</h3>
                        <h3>Court Surface: Asphalt</h3>
                        <h3>Popularity: Somewhat Busy</h3>
                        <h3>No Court Lights</h3>
                    </div>
                    <div>
                        <h2>Map Location</h2>
                        <a href="https://www.google.com/maps/dir//Sandy+Hill+Out+Door+Rink,+133+Sweetland+Ave,+Ottawa,+ON+K1N+7V1/@45.422256,-75.6776118,18z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cce05c87a3893c5:0x75ffb8a4bfc3c0d3!2m2!1d-75.6770733!2d45.4221442!3e0" target="_blank">
                            <img src={require('../assets/images/court2.png') } width="400" height="400" />
                        </a>
                        <p>Click the image to view on Google Maps</p>
                    </div>  
                    
                </div>
                <br /><br /><br />
                {goBackButton}
            </div>
    }
    else if (courtID == 3) { 
        courtInfo = 
            <div>
                <h1>uOttawa Tennis Court</h1>
                <div className="grid">
                    <div>
                        <h2>Court Information</h2>
                        <h3>Address: 78 University of Ottawa Rd. K1S 2B3</h3>
                        <h3>Hours of Operation: Evening</h3>
                        <h3>Access Type: Private</h3>
                        <h3>Court Surface: Clay</h3>
                        <h3>Popularity: Somewhat Busy</h3>
                        <h3>Has Court Lights</h3>
                    </div>
                    <div>
                        <h2>Map Location</h2>
                        <a href="https://www.google.com/maps/place/Ottawa+Titans+Baseball+Club/@45.42059,-75.6543976,18z/data=!4m5!3m4!1s0x4cce052f783fd449:0xbff8a3d36bc38ee9!8m2!3d45.4208103!4d-75.655154" target="_blank">
                            <img src={require('../assets/images/court3.png') } width="400" height="400" />
                        </a>
                        <p>Click the image to view on Google Maps</p>
                    </div>  
                    
                </div>
                <br /><br /><br />
                {goBackButton}
            </div>
    }
    else { 
        courtInfo = 
            <div>
                <h1>Rideau Tennis Court</h1>
                <div className="grid">
                    <div>
                        <h2>Court Information</h2>
                        <h3>Address: 910 Rideau St. K1S 4C6</h3>
                        <h3>Hours of Operation: Evening</h3>
                        <h3>Access Type: Public</h3>
                        <h3>Court Surface: Clay</h3>
                        <h3>Popularity: Busy</h3>
                        <h3>Has Court Lights</h3>
                    </div>
                    <div>
                        <h2>Map Location</h2>
                        <a href="https://www.google.com/maps/dir//Mackenzie+Ave,+Ottawa,+ON+K1N+1G8/@45.4278387,-75.6988937,18z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cce04fea77793c5:0x3963fdd8f7a21aa9!2m2!1d-75.6983978!2d45.4277708!3e0" target="_blank">
                            <img src={require('../assets/images/court4.png') } width="400" height="400" />
                        </a>
                        <p>Click the image to view on Google Maps</p>
                    </div>  
                    
                </div>
                <br /><br /><br />
                {goBackButton}
            </div>
    }

    return (
        <div>{courtInfo}</div>
    );

}