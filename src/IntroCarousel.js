import { Carousel } from 'react-carousel-minimal';
// Reference: https://www.npmjs.com/package/react-carousel-minimal

const IntroCarousel = () => {
 const data = [
     {
     image: "https://i.ibb.co/nwmShJz/2015-1.jpg",
     caption: "Magical Mirai 2015"
     },
     {
     image: "https://i.ibb.co/d52JgG4/2016.jpg",
     caption: "Magical Mirai 2016"
     },
     {
     image: "https://i.ibb.co/gSDnsWC/2016-1.jpg",
     caption: "Magical Mirai 2016"
     },
     {
     image: "https://i.ibb.co/T2YmX0K/2017.jpg",
      caption: "Magical Mirai 2017"
     },
     
     {
     image: "https://i.ibb.co/nwmShJz/2015-1.jpg",
     caption: "Magical Mirai 2015"
     },
     {
     image: "https://i.ibb.co/d52JgG4/2016.jpg",
     caption: "Magical Mirai 2016"
     },
     {
     image: "https://i.ibb.co/gSDnsWC/2016-1.jpg",
     caption: "Magical Mirai 2016"
     },
     {
     image: "https://i.ibb.co/T2YmX0K/2017.jpg",
     caption: "Magical Mirai 2017"
     },

     {
     image: "https://i.ibb.co/nwmShJz/2015-1.jpg",
     caption: "Magical Mirai 2015"
     },
     {
     image: "https://i.ibb.co/d52JgG4/2016.jpg",
     caption: "Magical Mirai 2016"
     },
     {
     image: "https://i.ibb.co/gSDnsWC/2016-1.jpg",
     caption: "Magical Mirai 2016"
     },
     {
     image: "https://i.ibb.co/T2YmX0K/2017.jpg",
     caption: "Magical Mirai 2017"
     },
     {
     image: "https://i.ibb.co/nwmShJz/2015-1.jpg",
     caption: "Magical Mirai 2015"
     },
     {
     image: "https://i.ibb.co/d52JgG4/2016.jpg",
     caption: "Magical Mirai 2016"
     },
     {
     image: "https://i.ibb.co/gSDnsWC/2016-1.jpg",
     caption: "Magical Mirai 2016"
     },
     {
     image: "https://i.ibb.co/T2YmX0K/2017.jpg",
     caption: "Magical Mirai 2017"
     },
     {
      image: "https://i.ibb.co/qmW9DkV/2017-1.jpg",
      caption: "Magical Mirai 2017"
     },
     {
      image: "https://i.ibb.co/MnY4dC6/2018-1.jpg",
      caption: "Magical Mirai 2018"
     },
     {
     image: "https://i.ibb.co/dJjZX6q/2018-2.jpg",
     caption: "Magical Mirai 2018"
     },
     {
     image: "https://i.ibb.co/SXMfftz/2019.jpg",
     caption: "Magical Mirai 2019"
     },
     {
     image: "https://i.ibb.co/9wHfb1v/2019-1.jpg",
     caption: "Magical Mirai 2019"
     },
     {
     image: "https://i.ibb.co/1M6TG7G/2020-1.jpg",
     caption: "Magical Mirai 2020"
     },
     {
     image: "https://i.ibb.co/qRcBsM5/2020-2.jpg",
     caption: "Magical Mirai 2020"
     },
     {
     image: "https://i.ibb.co/PFbLH2R/2020-3.jpg",
     caption: "Magical Mirai 2020"
     },
     {
     image: "https://i.ibb.co/dfmr3Q2/2020-4.jpg",
     caption: "Magical Mirai 2020"
     },
     {
     image: "https://i.ibb.co/wdfNztF/2020-5.jpg",
     caption: "Magical Mirai 2020"
     },
     {
     image: "https://i.ibb.co/ZMt8r29/2021.jpg",
     caption: "Magical Mirai 2021"
     },
     {
     image: "https://i.ibb.co/ZBmxh4M/2021-1.jpg",
     caption: "Magical Mirai 2021"
     }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }

  const slideNumberStyle = {
    fontSize: '19px',
    fontWeight: 'bold',
  }

  return (
    <Carousel
      data={data}
      time={3000}
      width="720px"
      height="420px"
      captionStyle={captionStyle}
      radius="0px"
      slideNumber={false}
      slideNumberStyle={slideNumberStyle}
      captionPosition="bottom"
      automatic={true}
      dots={false}
      pauseIconColor="white"
      pauseIconSize="50px"
      slideBackgroundColor="darkgrey"
      slideImageFit="cover"
      thumbnails={false}
      thumbnailWidth="100px"
      style={{
        textAlign: "center",
        // maxWidth: "46vw",
        // maxHeight: "47vh",
      }}
      />
  );
}

export default IntroCarousel;