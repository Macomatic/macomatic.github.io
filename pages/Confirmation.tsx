import "../assets/styles/styles.css"
import  { Link } from "react-router-dom"

export default function Confirmation() {

    return (
        <div>
            <h1>Thank you for your input!</h1>
            <h3>We appreciate your concerns and will respond to you within 3 - 5 business days!</h3>
            <br /><br /><br />
            <Link to="/home">
                <button className="customButton">Go back to Home Page</button>
            </Link>
            
        </div>
    )
}