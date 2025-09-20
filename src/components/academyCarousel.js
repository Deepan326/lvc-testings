import Carousel from 'react-bootstrap/Carousel';
import LVCAcaLogo from '../assets/lvcAcaTransparent.png'

function AcademyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img alt="" src={LVCAcaLogo} />
        <Carousel.Caption>
        <div class="p-5 bg-dark bg-opacity-50 text-center rounded shadow">
          <h1
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: '40px',
              fontWeight: '400',
            }}
          >
            Master the skills that matter in today&apos;s world -{' '}
            <strong>
              AI, Machine Learning, Data Science, and Full Stack Development.{' '}
            </strong>{' '}
            Our bootcamps combine{' '}
            <strong>70% hands-on learning with 30% theory, </strong>
            designed to make you{' '}
            <strong>career-ready within 6 to 12 months.</strong>
          </h1>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <em style={{ color: 'white', fontWeight: '400' }}>
              Learn. Shadow. Practice. Get Hired
            </em>
          </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" src={LVCAcaLogo} text="Second slide" />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>something</h3>
          <p style={{ color: 'black' }}>some other thing</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" src={LVCAcaLogo} text="Third slide" />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>something</h3>
          <p style={{ color: 'black' }}>some other thing</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AcademyCarousel;
