import './SpecialSection.css';
import Accordion from './Accordion';
import SetList from './SetList';
import { AiFillCaretDown } from "react-icons/ai";
import MikuCostume from './Pictures/Information/2019_Costume_1.png';
import OthersCostume from './Pictures/Information/2019_Costume_2.png';
import PhotoGallery from './Pictures/Information/2019_Photo_Gallery.png';

const specialSection = () => {
   return (  
      <div className="specialSection">
         <div className="containerInfo" id="costume">
            <div className="title">
               <h2 id="liveShow">COSTUME</h2>
            </div>

            <h3>Design for Hatsune Miku by ni02</h3>
            <div className="infoContent">
               <img src={ MikuCostume } alt="mikuCostume" />
            </div>
            
            <h3>Design for (LTR) Megurien Luka, Katio, Meiko, Jagamine Rin, and Kagamine Len, by ni02</h3>
            <div className="infoContent">
               <img src={ OthersCostume } alt="otherscostume" />
            </div>
         </div>

         <AiFillCaretDown className='arrowPosition arrowStyle'/>
                  
         <div className="containerInfo" id="theme song">
            <div className="title">
               <h2 id="liveShow">THEME SONG</h2>
            </div>

            <h3> "Bless Your Breath" by 和田たけあき </h3>
            <div className="youtubeVideo">
               <iframe
                     src="https://www.youtube.com/embed/a-Nf3QUFkOU"
                     width="560"
                     height="315"
                     frameborder="0"
                     allow="autoplay; encrypted-media"
                     allowfullscreen
                     title="MM2019Video"
                  />{" "}
            </div>
         </div>

         <AiFillCaretDown className='arrowPosition arrowStyle'/>

         <div className="containerInfo" id="after report">
            <div className="title">
               <h2 id="liveShow">AFTER REPORT</h2>
            </div>

            <h3>Photo Gallery</h3>
            <div className="infoContent">
               <img src={ PhotoGallery } alt="photoGallery" />
            </div>

            <h3> Concert Report </h3>
            <div className="youtubeVideo">
               <iframe
                     src="https://www.youtube.com/embed/7EEUU-yIN5c"
                     width="560"
                     height="315"
                     frameborder="0"
                     allow="autoplay; encrypted-media"
                     allowfullscreen
                     title="MM2019Video"
                  />{" "}
            </div>

            <h3> Set List </h3>
            <div className="setList">
               <Accordion title={<h4>OSAKA</h4>} content={<SetList />}/>
               <Accordion title={<h4>TOKYO</h4>} content={<SetList />}/>
            </div>
         </div>
      </div>
   );
}
 
export default specialSection;