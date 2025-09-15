import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/lvc-icon-removebg-preview.png';

function SpotLightCarousel() {


    return (
        <Carousel style={{ width: '85%', height: '35%', backgroundColor: '#68457c9b' }}>
            <Carousel.Item >
                <img alt='' style={{ width: '100%', height: '100%', backgroundColor: '#68457c9b', opacity: '.3' }} src={ExampleCarouselImage} text="First slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h1 style={{ color: 'black', fontWeight: 'bolder', fontSize: '70px' }}>LVC Spotlight Media – PR, Branding & Digital Growth</h1>
                    <p style={{ color: 'black', marginTop: '250px', textAlign: 'center', fontSize: '40px', fontWeight: 'normal' }}>
                        From <b>Forbes features to viral digital campaigns</b>, we help founders, CEOs, and startups <b>get seen,</b>
                        <br />
                        <b>get trusted, and get remembered.</b>
                        <br />
                        We don’t just promote — <b>we spotlight your brand and fuel your growth.</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img alt='' style={{ width: '100%', height: '100%', backgroundColor: '#68457c9b', opacity: '.3' }} src={ExampleCarouselImage} text="Second slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h2 style={{ color: 'black', fontWeight: 'bolder', fontSize: '60px' }}>Services</h2>
                    <div className='spotlight-carousel-services'>
                        <div className='spotlight-slide2-cards'>
                            <ul>
                                <h2
                                    style={{
                                        paddingBottom:'5px',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '10px'
                                    }}>PR & Media Features</h2>
                                <li className='spotlight-slide2-bulletpoints'>
                                    Guaranteed placements in <b>
                                        Forbes, Entrepreneur, Yahoo Finance, TechCrunch, Medium
                                        & more
                                    </b>

                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    Build global credibility fast
                                </li>
                            </ul>
                        </div>
                        <div className='spotlight-slide2-cards'>
                            <ul style={{ direction: 'rtl' }}>
                                <h2
                                    style={{
                                        paddingBottom:'5px',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '10px'
                                    }}>Personal Branding for Founders & CEOs</h2>
                                <li className='spotlight-slide2-bulletpoints'>
                                    Founder interviews, storytelling, podcasts
                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    Build authority on<b> LinkedIn, X, Instagram</b>
                                </li>
                            </ul>
                        </div>
                        <div className='spotlight-slide2-cards'>
                            <ul>
                                <h2
                                    style={{
                                        paddingBottom:'5px',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '10px'
                                    }}>Startup & Product Visibility</h2>
                                <li className='spotlight-slide2-bulletpoints'>
                                    Launch campaigns for SaaS & AI startups
                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    Attract <b> investors + customers</b> with the right buzz
                                </li>
                            </ul>
                        </div>
                        <div className='spotlight-slide2-cards'>
                            <ul style={{ direction: 'rtl' }}>
                                <h2
                                    style={{
                                        paddingBottom:'5px',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '10px'
                                    }}>Digital Marketing Excellence</h2>
                                <li className='spotlight-slide2-bulletpoints'>
                                    <b>Social Media Growth</b> (LinkedIn, X, Insta)
                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    SEO, Paid Ads, Content Marketing
                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    Performance campaigns with<b> ROI tracking</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='' style={{ width: '100%', height: '100%', backgroundColor: '#68457c9b', opacity: '.3' }} src={ExampleCarouselImage} text="Third slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h3 style={{ color: 'black' }}>something</h3>
                    <p style={{ color: 'black' }}>some other thing</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='' style={{ width: '100%', height: '100%', backgroundColor: '#68457c9b', opacity: '.3' }} src={ExampleCarouselImage} text="fourth slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h3 style={{ color: 'black' }}>something</h3>
                    <p style={{ color: 'black' }}>some other thing</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='' style={{ width: '100%', height: '100%', backgroundColor: '#68457c9b', opacity: '.3' }} src={ExampleCarouselImage} text="fifth slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h3 style={{ color: 'black' }}>something</h3>
                    <p style={{ color: 'black' }}>some other thing</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='' style={{ width: '100%', height: '100%', backgroundColor: '#68457c9b', opacity: '.3' }} src={ExampleCarouselImage} text="sixth slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h3 style={{ color: 'black' }}>something</h3>
                    <p style={{ color: 'black' }}>some other thing</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SpotLightCarousel;
