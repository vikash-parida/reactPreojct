import Carousel from "react-bootstrap/Carousel";
import homeImg1 from "../Images/homeImg1.jpg";
import homeImg2 from "../Images/homeImg2.jpg";
import homeImg3 from "../Images/homeImg3.jpg";
import homeImg4 from "../Images/homeImg4.jpg";
import homeImg5 from "../Images/homeImg5.jpg";
import homeImg6 from "../Images/homeImg6.jpg";

function Home() {
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img src={homeImg1} width={1150} height={400} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={homeImg2} width={1150} height={400} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={homeImg3} width={1150} height={400} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={homeImg4} width={1150} height={400} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={homeImg5} width={1150} height={400} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={homeImg6} width={1150} height={400} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
