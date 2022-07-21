import './ConcertDetailMM2019.css';
import Info from './InfoSection';
import Special from './SpecialSection';
import CommentSection from './CommentSection';
import { HashLink } from 'react-router-hash-link';
import MM2019 from './Pictures/2019MM.png';

const ConcertDetailMM2019 = () => {
   return (  
      <div className="concertDetailMM2019">
         {/* Intro section */}
            <div className="intro">
               <div className="detailTitle">
                  <h1 id="h1Left">HATSUNE MIKU</h1>
                  <h1 id="h1Right">"MARGICAL MIRAI 2019"</h1>
               </div>
            
               <div className="btnGroup">
                  <HashLink smooth to ='/ConcertDetail:MM2019/#info'>
                     <button>INFO</button>
                  </HashLink>
                  <HashLink smooth to ='/ConcertDetail:MM2019/#special'>
                     <button>SPECIAL</button>
                  </HashLink>
               </div>

               <div className="continerCD">
                  <div className="continerCD inner">
                     <h2>MAIN VISUAL</h2>
                     <div class="VLrotate"> </div>

                     <div className="textGroup">
                        <div className="costumeText">
                           <h3>ni02</h3>
                           <p>COSTUME. MAIN VISUAL</p>
                           <HashLink smooth to='/ConcertDetail:MM2019/#costume'>COSTUME<i class="arrowRight"/></HashLink>
                        </div>

                        <div className="themeText">
                           <p id='yearTheme'>YEAR'S THEME</p>
                           <h3 id='theme'>"Future Circus"!</h3>
                        </div>
                     </div>
                  </div>

                  <img src={MM2019} alt="2019MMDetail"/>
               </div>
            </div>

            {/* Info section */}
            <div className="info" id="info">
               <div className="infoTitle">
                  <h2>INFO</h2>
               </div>
               <Info />
            </div>

            {/* Special section */}
            <div className="special" id="special">
               <div className="specialTitle">
                  <h2>SPECIAL</h2>
               </div>

               <div className="btnGroup">
                  <HashLink smooth to ='/ConcertDetail:MM2019/#costume'>
                     <button>COSTUME</button>
                  </HashLink>
                  <HashLink smooth to ='/ConcertDetail:MM2019/#theme song'>
                     <button>THEME SONG</button>
                  </HashLink>
                  <HashLink smooth to ='/ConcertDetail:MM2019/#after report'>
                     <button>AFTER REPORT</button>
                  </HashLink>
               </div>

               <Special />
            </div>

            {/* Comments section */}
            <div className="comments" id="comments">
               <div className="infoTitle">
                  <h2>COMMENTS</h2>
               </div>
               <CommentSection />
            </div>
      </div>
   );
}
 
export default ConcertDetailMM2019;