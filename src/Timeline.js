import './Timeline.css';
import { Link } from 'react-router-dom';
import { MdUpcoming } from "react-icons/md";
import MM2022 from './Pictures/2022MM.png';
import MM2021 from './Pictures/2021MM.png';
import MM2020 from './Pictures/2020MM_summer.png';
import MM2019 from './Pictures/2019MM.png';
import MM2018 from './Pictures/2018MM.png';

const Timeline = ({concerts}) => {

  return (
    <div className="timeline">
      <div className="containerTL left">
        <div className="concert">
          <div className="imgBTN">
            <a href = "https://magicalmirai.com/10th/index_en.html">
              <img src={MM2022} alt="2022MM" id="MM2022" />
              <button>Magical Mirai 10th Anniversary</button>
            </a>
          </div>

          <MdUpcoming className='comingIconStyle'/>
          <p>UPCOMING!</p>

          <h2 id="upComing">2022</h2>
        </div>
      </div>
      <div className="containerTL right">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetail:MM2019">
              <img src={MM2021} alt="2021MM" id="MM2021" />
              <button>Magical Mirai 2021</button>
            </Link>
          </div>
          <h2>2021</h2>
        </div>
      </div>
      <div className="containerTL left">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetail:MM2019">
              <img src={MM2020} alt="2020MM" id="MM2020"/>
              <button>Magical Mirai 2020</button>
            </Link>
          </div>
          <h2>2020</h2>
        </div>
      </div>
      <div className="containerTL right">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetail:MM2019">
              <img src={MM2019} alt="2019MM" id="MM2019"/>
              <button>Magical Mirai 2019</button>
            </Link>
          </div>
          <h2>2019</h2>
        </div>
      </div>
      <div className="containerTL left">
        <div className="concert">
          <div className="imgBTN">
            <Link to = "/ConcertDetail:MM2019">
              <img src={MM2018} alt="2018MM" id="MM2018"/>
              <button>Magical Mirai 2018</button>
            </Link>
          </div>
          <h2>2018</h2>
        </div>
      </div>
    </div>
  );
}

export default Timeline;