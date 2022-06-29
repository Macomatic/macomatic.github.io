import "../assets/styles/styles.css"
import  { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

export default function Home() {

    return (
      <div className="temp">
        <h2>Welcome to the</h2>
        <h1>Tennis Court Finder</h1>
        <Link to="/findacourt">
            <button className="customButton">Find a Court</button>
        </Link>
      </div>
  
      
    );
}