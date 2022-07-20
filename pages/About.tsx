import "../assets/styles/styles.css"
import  { Link } from "react-router-dom"


export default function About() {

    return (
      <div className="smallerdiv">
        <h1>About Us</h1>
        <p className="largerParagraph">Tennis Court Finder started as a passion project between a few university students. Getting into tennis, it was hard to find suitable courts due to the vast variety between them. This came in the form of different surface types, having court lights, and whether a court is public or private access.</p>
        <p className="largerParagraph">It was frustrating to go to a tennis court only to find out it didn't have lights or that the public are unable to use it. As a result, we created Tennis Court Finder, a resource for all Tennis players to find a viable court for themself!</p>
        <br /><br />
        <h3>Have any issues with our service? Reach us at the following:</h3>
        <a href="mailto: tenniscourtfinder@gmail.com" target="_blank">
          <p>Email: tenniscourtfinder@gmail.com</p>
        </a>
        <Link to="/contactus">
          <button className="customButton">Contact Form</button>
        </Link>
      </div>
  
      
    );
}