import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card'
function Home() {
    return (
        <div className='home'>
             
         <Banner />   
        
        <div className="home_section">
            <Card  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YwkoqQZJTOa5Vkn1owxlhgHaEL%26pid%3DApi&f=1" title="Entire homes" description="Comfortable private places, with room for friends or family"/>
            <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6ILZVWYr1LYSVGVItqw14gHaEK%26pid%3DApi&f=1" title="Single room" description="Single  comfortable room for one person with Attach bathroom and toilet"/>
            <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wA37KRE5suAUsDoM70N74QHaEK%26pid%3DApi&f=1" title=" Double room" description=" Specially design for family with two bed and attach bathroom Tv set "/>             
        </div>
         <div className="home_section">
         <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q_0ygGKocMYlknN4zBnOWQHaEK%26pid%3DApi&f=1" title="House in Bali" description="Great sea view from room with attach swimming pool"  price="$350/night"/>
         <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.0yIp-wDHm3MePJAcJqXa8QHaEK%26pid%3DApi&f=1" title="Flat in Maldives" description="Room with proper interior design to enjoy the nature"  price="$300/night"/>
         <Card src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.On8VpCtOAeUkEa6q6tOlGAHaEK%26pid%3DApi&f=1" title="Room in Dubai" description="7star hotel of dubai with attractive rooms to visitor to view the skyscrapper" price="$2000/night"/>
         
        </div>
     </div>
    )
}

export default Home
