import React from 'react'
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star';
function SearchResult({img,location,title,descritpion,star,price,total}) {
    return (
        <div className="searchresult"> 
            <img src={img} alt="" /> 
                <FavoriteBorderIcon  className="searchresult_heart"/>

            <div SearchResult_info>
                <div className="searchresult_infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{descritpion}</p>
                </div>
                <div className="searchresult_infoBottom">
                    <div className="searchresult_stars">
                        <StarIcon  className="searchresult_star"/>
                        <p>
                            <strong>{star}</strong>
                        </p>                        
                    </div>
                </div>
                <div className="searchresult_price">
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    )
}

 export default SearchResult
