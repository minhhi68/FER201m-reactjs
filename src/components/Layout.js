import { Link } from "react-router-dom";
import { Navlink } from "react-router-dom";
function Layout(props){
	return(
		<nav>
		<ul>
		<li>
		<Navlink to = "/Home" activeStyle = {{color: 'red'}}>Home</Navlink>
		</li>
		<li>
		<Link to = "/Blogs" activeStyle = {{color: 'red'}}>Blogs</Navlink>
		</li>
		<li>
		<Link to = "/Contact" activeStyle = {{color: 'red'}}>Contact</Navlink>
		</li>
		</ul>
		<nav>
		);
}

export default Layout;
