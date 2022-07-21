import './InfoSection.css';
import { AiFillCaretDown } from "react-icons/ai";

const InfoSection = () => {
   return (  
      <div className="infoSection">
         <div className="containerInfo">
            <div className="title">
               <h2 id="liveShow">LIVE SHOW</h2>
               <h3>Locations and Dates</h3>
            </div>

            <div className="infoContent">
               <div className="containerInner">
                  <h4>OSAKA</h4>
                  <p>INTEX Osaka Hall 5A</p>
                  <p>2019.8.10(Sat) - 11(Sun)</p>
               </div>

               <div className="containerInner">
                  <h4>TOKYO</h4>
                  <p>Makuhari Messe</p>
                  <p>International ExhibitionHall 3</p>
                  <p>2019.8.30(Fri) - 9.1(Sun)</p>
               </div>
            </div>
         </div>
         
         <AiFillCaretDown className='arrowPosition arrowStyle'/>
                  
         <div className="containerInfo">
            <div className="title">
               <h2 id="liveShow">EXHIBITION</h2>
               <h3>Locations and Dates</h3>
            </div>

            <div className="infoContent">
               <div className="containerInner">
                  <h4>OSAKA</h4>
                  <p>INTEX Osaka Hall 4,5B</p>
                  <p>2019.8.9(Fri) - 11(Sun)</p>
               </div>

               <div className="containerInner">
                  <h4>TOKYO</h4>
                  <p>Makuhari Messe</p>
                  <p>International Exhibition Hall 1,2</p>
                  <p>2019.8.30(Fri) - 9.1(Sun)</p>
               </div>
            </div>
         </div>

         <AiFillCaretDown className='arrowPosition arrowStyle'/>

         <div className="containerInfo">
            <div className="title">
               <h2 id="liveShow">Links</h2>
               <h3>Links to Offical Site and Goods</h3>
            </div>

            <div className="infoContent">
               <div className="containerInner">
                  <h4>OFFICAL WEB</h4>
                  <a href="https://magicalmirai.com/2019/index_en.html"><button>LINK TO START</button></a>
               </div>

               <div className="containerInner">
                  <h4>OFFICAL GOODS</h4>
                  <a href="https://magicalmirai.com/2019/goods.html"><button>LINK TO START</button></a>
               </div>
            </div>
         </div>

         <AiFillCaretDown className='arrowPosition arrowStyle'/>

         <div className="containerInfo">
            <div className="title">
               <h2 id="liveShow">COMMERCIAL VIDEO</h2>
               <h3>Magical Mirai 2019 Commerical Video</h3>
            </div>

            <div className="youtubeVideo">
               <iframe
                  src="https://www.youtube.com/embed/uhjKm5Vzx-U"
                  width="560"
                  height="315"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="MM2019Video"
               />{" "}
            </div>
         </div>
      </div>
   );
}
 
export default InfoSection;