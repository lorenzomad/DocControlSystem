import { Link } from "react-router-dom"

const Header = () => {
    return (
        <ul className="navigation">
            <li> <Link to="/users"> Users </Link> </li>
            {/* <li> <Link to="/documents"> Documents</Link> </li>
            <li> <Link to="/documentInstances"> Document Instances</Link> </li> */}
            <li> <Link to="/diff"> Create Diff </Link> </li>
        </ul>
    )
}

export default Header