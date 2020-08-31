import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
//import {Avatar} from '@material-ui/core;
function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header_icon" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c513.png&f=1&nofb=1" alt="airbnb"/>
            </Link>
            
            <div className="header_center">
                <input type="text"></input>
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become host
                </p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />

            </div>
                

            
        </div>
    )
}

export default Header
