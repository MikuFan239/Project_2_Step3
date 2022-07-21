import './Home.css';
import mikuV2 from './Pictures/Miku_V2.png';
import mikuNT from './Pictures/Miku_NT_2.png';
import IntroCarousel from './IntroCarousel';
import Timeline from './Timeline';
import useFetch from './useFetch';

const Home = () => {
     const {data: concerts} = useFetch('http://localhost:8000/concerts');

     return (
          <div className="home">
               {/* Intro section */}
               <div className="intro">
                    <div className="intro-title">
                         <h1>MIKU'S CONCERT GALLERY</h1>
                         <p>Explore all the concerts that have hold for Hatsune Miku</p>
                    </div>

                    <div className="intro-carousel">
                         <div className="carousel">
                              <IntroCarousel/>
                         </div>

                         <div className="miku">
                              <img src={mikuNT} alt="introMikuNT" />
                              <p>Art by iXma and Rella</p>
                         </div>
                    </div>
               </div>

               {/* content(timeline) <section></section> */}
               <div className="past-concert" id='timeline'>
                    <div className="title">
                         <h2>ALL CONCERTS</h2>
                    </div>

                    <div className="timeline">
                         <Timeline concerts={concerts} />
                    </div>
               </div>

               {/* About section */}
               <div className="about" id="about">
                    <div className="about-miku">
                         <img src={mikuV2} alt="aboutMikuV2" />
                         <p>Art by KEI</p>
                    </div>

                    <div className="about-content">
                         <h2>WHAT IS HATSUNE MIKU?</h2>

                         <p>Hatsune Miku is music software developed by Crypton Future Media, INC., and it enables anyone to make the computer sing by entering lyrics and melodies. As a massive number of users created music using the software and posted their works on the Internet, Hatsune Miku quickly evolved into a cultural phenomenon. Moreover, Hatsune Miku has gained much attention as a character, involved in many fields such as merchandising and live performance as a virtual singer. Now her popularity has spread across the globe.</p>

                         <p>*Kagamine Rin, Kagamine Len, Megurine Luka, MEIKO and KAITO are also virtual singers developed by Crypton Future Media, INC.</p>
                    </div>
               </div>
          </div>
     );
}

export default Home;