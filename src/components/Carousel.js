import yearOne from '../Assets/Images/yearOne.jpg';
import Carousel from 'react-bootstrap/Carousel';
import vaccine from '../Assets/Images/vaccine.jpg';
import couple from '../Assets/Images/couple.jpg';
import nasa from '../Assets/Images/nasa.jpg';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={vaccine}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>A lab technician sorts blood samples for a coronavirus vaccination study at the Research Centers of America. (Chandan Khanna/AFP/Getty Images)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={couple}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>One of the first weddings the D.C. Superior Court conducted virtually. (Jahi Chikwendiu/The Washington Post)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nasa}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>The SpaceX Crew-1 blasts off with NASA astronauts. (Jonathan Newton/The Washington Post)</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
};

export default CarouselComponent;