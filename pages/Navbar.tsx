import  {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/home" className="nav-title">Tennis Court Finder 🎾</Link>
            <ul>
                <NavElement to="/home">Home</NavElement>
                <NavElement to="/findacourt">Find a Court</NavElement>
                <NavElement to="/tenniscontent">Tennis Content</NavElement>
                <NavElement to="/about">About</NavElement>
                <NavElement to="/howtouse">Steps to use Tennis Court Finder</NavElement>
            </ul>
        </nav>
    );

}

function NavElement({ to, children, ...props}: any) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link className="nav-elem" to={to} {...props}>
                {children}
                </Link>
        </li>
    )
}