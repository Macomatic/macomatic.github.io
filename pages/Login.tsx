import "../assets/styles/styles.css"

export default function Login() {

    return (
      <div>
        <h1>Login</h1>
        <div>
            <h4>Email:</h4>
            <input type="text" name="email" id="email"/>
        </div>
        <div>
            <h4>Password:</h4>
            <input type="text" name="password" id="password"/>
        </div>
        <br />
        <a href="/register">Don't have an account? Register now!</a>
        <br /><br />
        <button className="customButton">Login</button>
      </div>
  
      
    );
}