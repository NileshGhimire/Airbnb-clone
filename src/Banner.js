import React, {useState} from 'react';
import './Banner.css';
import Search from './Search'; 
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
function Banner() {
  const history= useHistory(  )
    const [showSearch,setshowSearch]=useState(false)
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search/>
                }
                <Button varient="outlined" 
                className="banner_searchButton" 
                onClick={() => setshowSearch(!showSearch)}>{showSearch ? "Hide" : "Search Dates"}</Button>

            </div>
          <div className="banner_info">
            <h1>Go play football Enjoy the nature</h1>
            <h5>Dream to watch liverpool in anfield singing liverpool in anfield road...    </h5>
            <Button varient="outlined" onClick={()=> history.push('/search')}>Explore Nearby</Button>
          </div>  
        </div>
            )
        }

        export default Banner


