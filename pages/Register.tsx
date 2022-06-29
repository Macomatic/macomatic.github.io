import "../assets/styles/styles.css"

export default function Register() {

    return (
      <div>
        <h1>Register</h1>
        <div>
            <h4>Full Name:</h4>
            <input type="text" name="name" id="name"/>
        </div>
        <div>
            <h4>Email:</h4>
            <input type="text" name="email" id="email"/>
        </div>
        <div>
            <h4>Password:</h4>
            <input type="text" name="password" id="password"/>
        </div>
        <br /><br />
        <button className="customButton">Register</button>
      </div>
  
      
    );
}