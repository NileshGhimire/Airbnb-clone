import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import {Button} from '@material-ui/core';
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage_info">
                <p>62 stays - 26 august to 30
                    august - 2 guest
                </p>
                <h1>
                    Stays nearby
                </h1>
                <Button varient="outlined"> Cancellation Flexibility</Button>
                <Button varient="outlined"> Type of place </Button>
                <Button varient="outlined"> Price</Button>
                <Button varient="outlined"> Rooms and beds</Button>    
                <Button varient="outlined">More filters</Button>
            </div>
            <SearchResult img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIF.1PrkCwMJdk7Y4M3c3uNOjw%26pid%3DApi&f=1" location="Private room in center of London"
                title="stay at Balli"
                descritpion= "Ocean view from the room with all facilities like  Wifi Kitchen Free parking Washing machine" star={4.00} price="$60/night" total="$330 total" />
                <SearchResult img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIF.1nf18Y%252bVObB2Ku5HeO8H2A%26pid%3DApi&f=1" location="Private room in center of London"
                title="Enjoy great himalayas and stay at apartment from Nepal"
                descritpion= " Great view of himalayas and a glance and enjoy the nature with all prerequisite faciilities like Shared bathrooms Wifi Kitchen Free parking Washing machine" star={4.9} price="$90/night" total="$450 total" />
                 <SearchResult img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIF.05xKFHR3eklhSfAA0ASoUg%26pid%3DApi&f=1" location="Private room in center of London"
                title="Stay at this spacious Nilesh Ghimire House"
                descritpion= "1 large room with the great view of river bank with rice field.Wifi Kitchen Free parking Washing machine are facilities" star={4.5} price="$120/night" total="$800 total" />
                 <SearchResult img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIF.WQa1gX3jTsbIDak7zrLuCg%26pid%3DApi&f=1" location="Private room in center of London"
                title="stay at Lukal, Nepal"
                descritpion= "1 guest - 1 bedroom 1 bed 1.5 Shared bathrooms and enjoy enjoy rich natural beauty of Lukla. Wifi Kitchen Free parking Washing machine" star={4.73} price="$130/night" total="$850 total" />
         </div>
    )
}

export default SearchPage
