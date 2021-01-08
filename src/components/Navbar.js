import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

function Navbar (props){
   // setTimeout(() => {
     //   props.history.push('/about') 
     //}, 2000);
    return(
        <React.Fragment>
          <nav className="nav-wrapper red darken-3">
                <div className="container">
                <a className="brand-logo" href="/">Poke'Times</a>
                <a className="sidenav-trigger" id="#" data-target="mobile-links">
                    <i className="material-icons" >menu</i>
                </a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-links">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </React.Fragment>

    )
}
export default withRouter(Navbar)