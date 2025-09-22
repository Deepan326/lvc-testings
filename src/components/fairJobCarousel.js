import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import ExampleCarouselImage from '../assets/vecteezy_black-and-gray-background-vector-illustration-lighting_6417811-1.jpg';
import FairJob from "../assets/fairJob-icon.png";
import Row from 'react-bootstrap/Row';


function FairJobCarousel() {
    return (
        <Carousel className="gradient-background-color bg-black">
            <Carousel.Item className="fairjob-carousel-scroll">
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '800px', opacity: '0' }} src={ExampleCarouselImage} text="First slide" />
                <Carousel.Caption className="fairjob-carousel-items-container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5" id="fairjob-item-1-div-1">
                            <img
                            src={FairJob}
                            alt="Fair Job Portal preview"
                            className="img-fluid rounded shadow-sm"
                            id="fairjob-img"
                            />
            
                            <a
                            href="https://www.lvcfairjob.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light mt-3 w-100"
                            id="fairjob-btn"
                            aria-label="Open the Fair Job Portal website"
                            >
                            Visit Fair Job Portal
                            </a>
                        </div>
            
                        <div className="col-12 col-md-7 d-flex flex-column justify-content-center h-100" id="fairjob-right">
                            <div id="fairjob-title">
                            <h2>
                                <strong>
                                LVC Fair Job <br />
                                The World's First Scam-Free Job Portal
                                </strong>
                            </h2>
                            <h3>
                                <em>
                                Built for Trust, Transparency & Real Results
                                </em>
                            </h3>
                            </div>
                            <p id="fairjob-subtext">
                            Unlike LinkedIn, Indeed, ZipRecruiter, Monster, or Naukri — we eliminate fake profiles, spam jobs, and scam recruiters. 
                            <br /> <br />
            
                            At LVC Fair Job, we’re building the most trusted hiring ecosystem — where genuine job seekers meet verified recruiters with complete transparency.
                            <br /><br />
                            <em>
                                👉 “No scams. No spam. Just real opportunities.”
                            </em>
                            </p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="fairjob-carousel-scroll">
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '800px', opacity: '0' }} src={ExampleCarouselImage} text="Second slide" />
                <Carousel.Caption className="fairjob-carousel-items-container">
                    <Row xs={1} md={1} lg={1} xl={2} className="g-4" style={{ "margin-left": "100px", "margin-right": "100px" }}>
                        <Col>
                            <Card className='fairjob-cards' id="fairjob-card-1">
                                <Card.Body>
                                    <Card.Title className="card-titles">Verified Profiles</Card.Title>
                                    <Card.Text>
                                        <ul id="fairjob-list">
                                            <li>✅ No fake job seekers → Strict ID & education verification</li>
                                            <li>✅ No fake recruiters → Company & individual checks</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='fairjob-cards'>
                                <Card.Body>
                                    <Card.Title className="card-titles">AI-Powered Screening</Card.Title>
                                    <Card.Text>
                                        <ul id="fairjob-list">
                                            <li>🤖 Virtual AI interview calls & chatbot assessments</li>
                                            <li>🎯 Shortlist only authentic, skilled candidates</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='fairjob-cards'>
                                <Card.Body>
                                    <Card.Title className="card-titles">Smart Matching Engine</Card.Title>
                                    <Card.Text>
                                        <ul id="fairjob-list">
                                            <li>🔍 ATS + Generative AI → Job–Resume precision matching</li>
                                            <li>🚀 Saves time for both recruiters & job seekers</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='fairjob-cards' style={{ marginBottom: "50px" }}>
                                <Card.Body>
                                    <Card.Title className="card-titles">Transparent Hiring</Card.Title>
                                    <Card.Text>
                                        <ul id="fairjob-list">
                                            <li>📊 Real-time application tracking</li>
                                            <li>❌ No “black hole” after applying</li>
                                            <li>🔒 Zero misuse of personal data</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="fairjob-carousel-scroll">
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '800px', opacity: '0' }} src={ExampleCarouselImage} text="Third slide" />
                <Carousel.Caption className="fairjob-carousel-items-container" style={{ flexDirection: "column", justifyContent: "center", margin: 0 }}>
                    <h3 id="fairjob-item-3-h3" style={{ color: 'white', fontSize: "50px", marginBottom: "25px" }}>Why Choose LVC Fair Job?</h3>
                    <ul style={{ textAlign: 'start', fontSize: "20px" }}>
                        <li>✅ Scam-Free Ecosystem → 100% verified recruiters, job seekers, and postings</li>
                        <li>✅ AI Recruiting Tools → Smart resume-job matching + AI interview chatbots</li>
                        <li>✅ Transparency First → Application status updates & real-time job closure</li>
                        <li>✅ Data Privacy Guaranteed → No data resale, no spam calls/emails</li>
                        <li>✅ Career Hub → Networking, messaging, interview prep & daily tech updates</li>
                    </ul>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="fairjob-carousel-scroll">
                <img alt='vecteezy.com jpeg black and grey background' style={{ width: '100%', height: '800px', opacity: '0' }} src={ExampleCarouselImage} text="Fourth slide" />
                <Carousel.Caption className="fairjob-carousel-items-container" style={{ flexDirection: "column", justifyContent: "center", margin: 0 }}>
                    <h3 style={{ color: 'white', fontSize: '50px', "marginBottom": "25px" }}>Join the World's First Scam-Free Job Portal!</h3>
                    <Button href="https://www.lvcfairjob.com/" style={{ fontSize: "30px" }}>👉 Explore Fair Job Portal</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default FairJobCarousel;