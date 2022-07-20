import "../assets/styles/styles.css"
import  { Link } from "react-router-dom"


export default function ContactUs() {

    return (
        <div>
            <div>
            <h1>Contact Us</h1>
            <h3>Have any issues with our service? Fill out the form below!</h3>
            <br /><h3>Name</h3>
            <input type="text" id="name" placeholder="Name: Optional"/>
            <br /><h3>Email</h3>
            <input type="text" id="email" placeholder="Email: Optional" />
            <br /><h3>Write your concerns</h3>
            <textarea  id="body" placeholder="Voice your concerns!"></textarea>
            </div>
            <br /><br />
            <div>
                <Link to="/confirmation">
                    <button className="customButton">Submit</button>
                </Link>
            </div>
        </div>
        
    );
}