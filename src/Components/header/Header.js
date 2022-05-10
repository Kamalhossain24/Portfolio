import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';



const Header = () => {
  return <div>
<nav class="navbar navbar-expand-lg navbar-dark">
	<Link to='/' class="navbar-brand">Mr.<b>Kamal</b></Link>  		
	<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
		


		<div class="navbar-nav">
			<Link to='/' class="nav-item nav-link">Home</Link>
			<Link to='/' class="nav-item nav-link">About</Link>			
			<div class="nav-item dropdown">
				<Link to='/' data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Services</Link>
				<div class="dropdown-menu">					
					<Link to='/' class="dropdown-item">Web Design</Link>
					<Link to='/' class="dropdown-item">Web Development</Link>
					<Link to='/' class="dropdown-item">Graphic Design</Link>
					<Link to='/' class="dropdown-item">Digital Marketing</Link>
                </div>
            </div>
			<Link to='/' class="nav-item nav-link active">Portfolio</Link>
			<Link to='/' class="nav-item nav-link">Blog</Link>
			<Link to='/' class="nav-item nav-link">Contact</Link>
			<Link to='/' class="nav-item nav-link">Blog</Link>
			<Link to='/' class="nav-item nav-link">Contact</Link>
			<Link to='/' class="nav-item nav-link">Blog</Link>
			<Link to='/' class="nav-item nav-link">Contact</Link>
			<Link to='/' class="nav-item nav-link">Blog</Link>
			<Link to='/' class="nav-item nav-link">Contact</Link>
        </div>	
	</div>
</nav>
  </div>;
};

export default Header;
