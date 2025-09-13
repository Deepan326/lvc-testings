import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/google.jpeg';

function SpotLightCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img alt='' src={ExampleCarouselImage} text="First slide" />
                <Carousel.Caption>
                    <h3 style={{ color: 'black' }}>something</h3>
                    <p style={{ color: 'black' }}>some other thing </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='' src={ExampleCarouselImage} text="Second slide" />
                <Carousel.Caption>
                    <h3 style={{ color: 'black' }}>something</h3>
                    <p style={{ color: 'black' }}>some other thing</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='' src={ExampleCarouselImage} text="Third slide" />
                <Carousel.Caption>
                    <h3 style={{ color: 'black' }}>something</h3>
                    <p style={{ color: 'black' }}>some other thing</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SpotLightCarousel;
