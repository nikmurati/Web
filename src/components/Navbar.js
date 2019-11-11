import React,{Component} from 'react';
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

class Navbar extends Component{
    state = {
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        return(
            <nav className="naavbar">
            <div className="naav-center">
            <div className="naav-header">
            <Link to="/">
            <img src={logo} alt="Beach Resort"/>
            </Link>
            <button type="button" className="naav-btn" 
            onClick = {this.handleToggle}>
            <FaAlignRight className="naav-icon"/>
            </button>
            </div>
            <ul 
            className={this.state.isOpen ? "naav-links show-naav" : "naav-links"}> 
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to="/rooms">Rooms</Link>
            </li>
            <li>
                <Link to  ="/reservations">Reservation</Link>
            </li>
            </ul>
            </div>
            
            </nav>
            
        )
    }
}

export default Navbar;