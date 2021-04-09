import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function Nav() {
  return (
    	<nav>
    		<h3>Logo</h3>
    		<ul className="nav-links">
    			<Link className="li" to="/about">
	    			<li>About</li>
	    		</Link>
	    		<Link className="li"to="/shop">
    				<li>Shop</li>
    			</Link>
    		</ul>
    	</nav>
  );
}

export default Nav;
