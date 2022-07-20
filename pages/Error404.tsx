import "../assets/styles/styles.css"
import  { Link } from "react-router-dom"

export default function Error404() {

    return (
        <div>
            <h1>Oops! It looks like we ran into an error!</h1>
            <h3>We apologize about this, please try again later and hopefully we would have fixed the issue on our end!</h3>
            <br /><br /><br />
            <Link to="/home">
                <button className="customButton">Go back to Home Page</button>
            </Link>
            
        </div>
    )
}