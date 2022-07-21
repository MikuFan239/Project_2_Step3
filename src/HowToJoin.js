import "./HowToJoin.css"
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

const HowToJoin = () => {
   return (  
      <div className="howToJoin">
         {/* Intro section */}
         <div className="jointIntro">
            <div className="joinTitle">
               <h1 id="h1Left">HOW TO JOIN THE CONCERT </h1>
               <h1 id="h1Right">OF HATSUNE MIKU</h1>
            </div>
         </div>

         {/* Instruction section */}
         <div className="instruction">
            <div className="steps">
               <h2>STEP 1<i class="arrowRight"/></h2>
               <div className="stepContent">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos doloribus voluptatibus quos, molestiae qui distinctio laborum rerum ipsam accusantium, eum soluta vero ipsa, nobis iste consequuntur officiis temporibus sunt et!</p>
               </div>
            </div>

            <div className="stepBTN">
               <Link to ="/HowToJoin2"><button>NEXT</button></Link>
            </div>
         </div>
         <ProgressBar 
               completed={20} 
               labelColor="#ffff" 
               bgColor="#E64691" 
               baseBgColor="#ffff" 
               transitionTimingFunction="ease-in-out"
               className="barStyle"/>
      </div>
   );
}
 
export default HowToJoin;