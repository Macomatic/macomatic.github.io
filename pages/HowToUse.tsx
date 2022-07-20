import "../assets/styles/styles.css"
import  { Link } from "react-router-dom"

export default function HowToUse() {

    return (
        <div>
            <h1>How to Use our Service</h1>
            <h3>Are you confused on how to use our service? Follow these easy steps!</h3>
            <br /><br />
            <p>Step 1: Go to the Tennis Court Finder Page</p>

            <Link to="/findacourt">
                <button className="customButton">Go to Tennis Court Finder Page</button>
            </Link>

            <br /><br />
            <p>Step 2: Choose the desired filters based on your preferences, you can also leave them empty!</p>
            <br />
            <p>Step 3: Click "Filter Results"</p>
            <br />
            <p>Step 4: From the available tennis court options on the right side, choose one by clicking the "Visit Court" button</p>
            <br />
            <p>Step 5: Now you can see that court's information! You are done!</p>
        </div>
    )
}