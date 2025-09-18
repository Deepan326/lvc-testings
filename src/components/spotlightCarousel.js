import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/vecteezy_black-and-gray-background-vector-illustration-lighting_6417811-1.jpg';
import spotlightLogo from '../assets/lvcSpo.jpg'
function SpotLightCarousel() {


    return (
        <Carousel className='gradient-background-color'>
            <Carousel.Item style={{ marginBottom: '30px' }}>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '100%', opacity: '0' }} src={ExampleCarouselImage} text="First slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h2 style={{ color: 'black', fontWeight: 'bolder', fontSize: 'clamp(10px, 3vmax, 5vmax)' }}>LVC Spotlight Media – PR, Branding & Digital Growth</h2>
                    <p style={{ color: 'black', paddingTop: '2vw', marginTop: '2vw', textAlign: 'center', fontSize: '2vw', fontWeight: 'normal' }}>
                        From <b>Forbes features to viral digital campaigns</b>, we help founders, CEOs, and startups <b>get seen,</b>
                        <br />
                        <b>get trusted, and get remembered.</b>
                        <br />
                        We don’t just promote — <b>we spotlight your brand and fuel your growth.</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ overflow: 'auto' }} >
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '100%', opacity: '0' }} src={ExampleCarouselImage} text="Second slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h2 style={{ marginLeft: '35px', color: 'black', fontWeight: 'bolder', fontSize: 'clamp(10px, 3vmax, 5vmax)' }}>Services</h2>
                    <div className='spotlight-carousel-services'>
                        <div className='spotlight-slide2-cards'>
                            <ul>
                                <h2
                                    style={{
                                        // paddingBottom: '1rem',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '.3rem',
                                        fontSize: '1rem'
                                    }}>PR & Media Features</h2>
                                <li className='spotlight-slide2-bulletpoints'>
                                    📰Guaranteed placements in <b>
                                        Forbes, Entrepreneur, Yahoo Finance, TechCrunch, Medium
                                        & more
                                    </b>

                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    🎯Build global credibility fast
                                </li>
                            </ul>
                        </div>
                        <div className='spotlight-slide2-cards'>
                            <ul className='direction-right'>
                                <h2
                                    style={{
                                        // paddingBottom: '1rem',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '.3rem',
                                        fontSize: '1rem'
                                    }}>Personal Branding for Founders & CEOs</h2>
                                <li className='spotlight-slide2-bulletpoints'>
                                    🌟Founder interviews, storytelling, podcasts
                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    🤝Build authority on<b> LinkedIn, X, Instagram</b>
                                </li>
                            </ul>
                        </div>
                        <div className='spotlight-slide2-cards'>
                            <ul>
                                <h2
                                    style={{
                                        // paddingBottom: '1rem',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '.3rem',
                                        fontSize: '1rem'
                                    }}>Startup & Product Visibility</h2>
                                <li className='spotlight-slide2-bulletpoints'>
                                    🚀Launch campaigns for SaaS & AI startups
                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    📈Attract <b> investors + customers</b> with the right buzz
                                </li>
                            </ul>
                        </div>
                        <div className='spotlight-slide2-cards pb-1'>
                            <ul className='direction-right'>
                                <h2
                                    style={{
                                        // paddingBottom: '1rem',
                                        fontWeight: 'bold',
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '.3rem',
                                        fontSize: '1rem'
                                    }}>Digital Marketing Excellence</h2>
                                <li className='spotlight-slide2-bulletpoints'>
                                    📱<b>Social Media Growth</b> (LinkedIn, X, Insta)
                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    🔍SEO, Paid Ads, Content Marketing
                                </li>
                                <li className='spotlight-slide2-bulletpoints'>
                                    📊Performance campaigns with<b> ROI tracking</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ overflow: 'auto' }}>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '100%', opacity: '0' }} src={ExampleCarouselImage} text="Third slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h2 style={{ color: 'black', fontWeight: 'bolder', fontSize: 'clamp(10px, 3vmax, 5vmax)' }}>Why Choose LVC Spotlight Media?</h2>
                    <div className='spotlight-slide2-cards'>
                        <ul style={{ paddingBottom: '2vmax', marginTop: '', paddingTop: '5vmax' }}>
                            <li style={{ fontSize: 'clamp(10px, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b> Founder-First Approach</b> → We put leaders in the spotlight, not just products
                            </li>
                            <li style={{ fontSize: 'clamp(10px, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b> Guaranteed Media Features </b>→ Direct partnerships with global platforms
                            </li>
                            <li style={{ fontSize: 'clamp(10px, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b> Integrated Growth </b> → PR + Branding + Digital Marketing in one
                            </li>
                            <li style={{ fontSize: 'clamp(10px, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b> Tech & Startup Focus </b>→ Specialized in SaaS, AI, and innovation-driven businesses
                            </li>
                            <li style={{ fontSize: 'clamp(10px, 1.5vmax, 3rem)' }} className='spotlight-slide2-bulletpoints'>
                                <b> Affordable Packages </b>→ Growth plans that scale with your journey
                            </li>
                        </ul>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ overflow: 'auto' }}>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '100%', opacity: '0' }} src={ExampleCarouselImage} text="Fourth slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <h2 style={{ color: 'black', fontWeight: 'bolder', fontSize: 'clamp(10px, 3vmax, 5vmax)', textAlign: 'center' }}>Competitor Comparison</h2>
                    <p style={{ color: 'black', fontSize: 'clamp(10px, 1rem, 1.5vmax)', textAlign: 'center' }}>Why LVC Spotlight Media Beats the Rest</p>
                    <table className='spotlight-slide2-grid'>
                        <thead style={{ width: '100%', height: '30%' }}>
                            <tr>
                                <th className='spotlight-grid-col' scope="col">Feature</th>
                                <th className='spotlight-grid-col' scope="col">LVC Spotlight Media</th>
                                <th className='spotlight-grid-col' scope="col">Traditional PR Agencies</th>
                                <th className='spotlight-grid-col' scope="col">Generic Digital Marketing Firms</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b>PR & Media Placements</b></th>
                                <td className='spotlight-graph-cells'>✅ Guaranteed global features(Forbes,Entrepreneur,Yahoo, etc.)</td>
                                <td className='spotlight-graph-cells'>❌ Pitched-based, no guarantees</td>
                                <td className='spotlight-graph-cells'>❌ Not offered</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b>Founder Branding</b></th>
                                <td className='spotlight-graph-cells'>✅ Personal storytelling, CEO spotlight, LinkedIn growth</td>
                                <td className='spotlight-graph-cells'>❌ Focus only on companies</td>
                                <td className='spotlight-graph-cells'>❌ Focus on ads, not people</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b>Startup, SaaS Focus</b></th>
                                <td className='spotlight-graph-cells'>✅ Tailored for AI, SaaS & startups</td>
                                <td className='spotlight-graph-cells'>❌ Industry-generic</td>
                                <td className='spotlight-graph-cells'>❌ Campaign-based only</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b>Digital Marketing</b></th>
                                <td className='spotlight-graph-cells'>✅ SEO, Paid Ads, Social Media + ROI tracking</td>
                                <td className='spotlight-graph-cells'>❌ Not Offered</td>
                                <td className='spotlight-graph-cells'>✅ Yes, but no PR credibility</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b>Speed of Results</b></th>
                                <td className='spotlight-graph-cells'>✅ 2-6 weeks for media + campaigns</td>
                                <td className='spotlight-graph-cells'>❌3-6 months or more</td>
                                <td className='spotlight-graph-cells'>⚠️Dependent on ad spend</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b>Pricing</b></th>
                                <td className='spotlight-graph-cells'>✅ Flexible, growth-friendly packages</td>
                                <td className='spotlight-graph-cells'>❌ Expensive retainers ($5k-$20k/month)</td>
                                <td className='spotlight-graph-cells'>⚠️Ad-heavy, recurring costs</td>
                            </tr>
                        </tbody>
                    </table>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '100%', opacity: '0' }} src={ExampleCarouselImage} text="fifth slide" />
                <Carousel.Caption className='spotlight-carousel-items-container d-flex justify-content-center align-items-center'>
                    <div className='spotlight-logo-slide'>
                        <img className='spotlight-logo-img' alt='spotlight media logo' src={spotlightLogo} />
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '100%', opacity: '0' }} src={ExampleCarouselImage} text="sixth slide" />
                <Carousel.Caption className='spotlight-carousel-items-container'>
                    <div className='spotlight-slide5'>
                        {/* <h1 style={{ color: 'black', fontWeight: 'bolder', fontSize: 'clamp(10px, 3vmax, 5vmax)' }}>Call-to-Action</h1> */}
                        <div>
                            <h1 style={{ color: 'black', fontWeight: 'bolder', fontSize: 'clamp(10px, 3vmax, 5vmax)', alignItems: 'center' }}>“From Media Spotlight to Digital Growth – We’ve Got You Covered.”</h1>
                            <a href="https://www.lvcspotlightmedia.com/"
                                target="_blank"
                                rel="noreferrer"
                                class="btn spotlight-media-button">
                                Discover Spotlight Media
                            </a>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    );
}

export default SpotLightCarousel;
