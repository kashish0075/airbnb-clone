import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Link } from 'react-router-dom';

function Header(){
    return (
    <div className='header'>
      
      <Link to='/'>
      <img
        className='header_icon'
        src='data:image/png;base64,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'
        alt=""
        />

      </Link>
      <div className='header_center'>
        <input type="text"/>
        <Link to='/search'>
        <SearchIcon/>
        </Link>
      </div>

      <div className='header_right'>
        <p>Become A Host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <AccountCircleRoundedIcon/>
      </div>

    </div>
    )
}

export default Header;