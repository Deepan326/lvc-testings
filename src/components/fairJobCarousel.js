import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import FairJob from "../assets/fairJob-icon.png";
import Row from 'react-bootstrap/Row';


function FairJobCarousel() {
    return (
        <Carousel className="gradient-background-color bg-black">
            <Carousel.Item className="fairjob-carousel-scroll fairjob-carousel-items-container">
                <div className="row align-items-center" style={{ paddingTop: "14.5%", display: "flex", alignItems: "center", marginBottom: "40px" }}>
                    <div className="col-12 col-md-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "40px" }}>
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
                        className="btn btn-outline-light mt-3"
                        id="fairjob-btn"
                        aria-label="Open the Fair Job Portal website"
                        >
                        Visit Fair Job Portal
                        </a>
                    </div>
        
                    <div className="col-12 col-md-8 d-flex flex-column justify-content-center h-100" id="fairjob-right" style={{ paddingRight: '12px' }}>
                        <div id="fairjob-title">
                            <h3 className='header-2-clamp'>
                                <em>
                                Built for Trust, Transparency & Real Results
                                </em>
                            </h3>
                        </div>
                        <p className="paragraph-clamp" style={{color:'white'}}>
                        Unlike LinkedIn, Indeed, ZipRecruiter, Monster, or Naukri — we eliminate fake profiles, spam jobs, and scam recruiters. 
                        <br /> <br />
        
                        At LVC Fair Job, we’re building the most trusted hiring ecosystem — where genuine job seekers meet verified recruiters with complete transparency.
                        <br /><br />
                        <em>
                                “No scams. No spam. Just real opportunities.”
                        </em>
                        </p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="fairjob-carousel-scroll fairjob-carousel-items-container">
                <Row xs={1} md={1} lg={1} xl={2} className="g-4 mx-auto" style={{ "margin-left": "100px", "margin-right": "100px", paddingTop: "5%" }}>
                    <Col>
                        <Card className='fairjob-cards' id="fairjob-card-1">
                            <Card.Body>
                                <Card.Title className="card-titles" style={{fontSize: 'clamp(25px, 2vmax, 40px'}}>Verified Profiles</Card.Title>
                                <Card.Text>
                                    <ul id="fairjob-list" className="paragraph-clamp">
                                        <li> No fake job seekers → Strict ID & education verification</li>
                                        <li> No fake recruiters → Company & individual checks</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='fairjob-cards'>
                            <Card.Body>
                                <Card.Title className="card-titles" style={{fontSize: 'clamp(25px, 2vmax, 40px'}}>AI-Powered Screening</Card.Title>
                                <Card.Text>
                                    <ul id="fairjob-list" className="paragraph-clamp">
                                        <li> Virtual AI interview calls & chatbot assessments</li>
                                        <li> Shortlist only authentic, skilled candidates</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='fairjob-cards'>
                            <Card.Body>
                                <Card.Title className="card-titles" style={{fontSize: 'clamp(25px, 2vmax, 40px'}}>Smart Matching Engine</Card.Title>
                                <Card.Text>
                                    <ul id="fairjob-list" className="paragraph-clamp">
                                        <li> ATS + Generative AI → Job–Resume precision matching</li>
                                        <li> Saves time for both recruiters & job seekers</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='fairjob-cards' style={{ marginBottom: "50px" }}>
                            <Card.Body>
                                <Card.Title className="card-titles" style={{fontSize: 'clamp(25px, 2vmax, 40px'}}>Transparent Hiring</Card.Title>
                                <Card.Text>
                                    <ul id="fairjob-list" className="paragraph-clamp">
                                        <li> Real-time application tracking</li>
                                        <li> No “black hole” after applying</li>
                                        <li> Zero misuse of personal data</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item className="fairjob-carousel-scroll fairjob-carousel-items-container" style={{ paddingTop: '13%'}}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "40px" }}>
                    <h3 id="fairjob-item-3-h3" style={{ color: 'white', marginBottom: "25px" }} className="header-1-clamp">Why Choose LVC Fair Job?</h3>
                    <ul style={{ textAlign: 'start', color:'white'}} className="paragraph-clamp">
                        <li> <strong>Scam-Free Ecosystem</strong> → 100% verified recruiters, job seekers, and postings</li>
                        <li> <strong>AI Recruiting Tools</strong> → Smart resume-job matching + AI interview chatbots</li>
                        <li> <strong>Transparency First</strong> → Application status updates & real-time job closure</li>
                        <li> <strong>Data Privacy Guaranteed</strong> → No data resale, no spam calls/emails</li>
                        <li> <strong>Career Hub</strong> → Networking, messaging, interview prep & daily tech updates</li>
                    </ul>
                </div>
            </Carousel.Item>

            <Carousel.Item className="fairjob-carousel-scroll fairjob-carousel-items-container">
                <div style={{ paddingTop: "7%", paddingBottom: '40px' }}>
                    <h2 style={{ color: 'white', fontWeight: 'bolder', fontSize: 'clamp(10px, 3vmax, 80px)', textAlign: 'center' }}>Competitor Comparison</h2>
                    <p style={{ color: 'white', fontSize: 'clamp(13px, 1vmax, 26px)', textAlign: 'center' }}>Why LVC Fair Job Portal Beats the Rest</p>
                    <table className='spotlight-slide2-grid'>
                        <thead style={{ width: '100%', height: '30%', color:'white' }}>
                            <tr>
                                <th className='spotlight-grid-col' scope="col">Feature</th>
                                <th className='spotlight-grid-col' scope="col">LVC Fair Job Portal</th>
                                <th className='spotlight-grid-col' scope="col">LinkedIn</th>
                                <th className='spotlight-grid-col' scope="col">Indeed</th>
                                <th className='spotlight-grid-col' scope="col">ZipRecruiter</th>
                                <th className='spotlight-grid-col' scope="col">Monster</th>
                                <th className='spotlight-grid-col' scope="col">Naukri</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{color:'white'}}>Profile Authenticity</b></th>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>✅ Verified job seekers & recruiters</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Anyone can join</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Limited checks</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Basic checks</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Weak verification</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Many fake profiles</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{color:'white'}}>Job Post Quality</b></th>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>✅ AI-verified & scam-free</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Fake & expired posts</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Mix of genuine + scam</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Sponsored-heavy</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Spammy, duplicates</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Expired jobs remain</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{color:'white'}}>AI Screening</b></th>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>✅ Virtual interview bots + JD matching</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Manual filtering</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Keyword-based</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Resume keyword match</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Generic</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Manual</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{color:'white'}}>Application Tracking</b></th>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>✅ Real-time updates & closure tracking</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ None</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Very limited</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Recruiter-driven only</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ No clarity</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Rare updates</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{color:'white'}}>Data Privacy</b></th>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>✅ No resale, zero spam</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Data for ads</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Candidate data resold</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Outreach-heavy</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Shared widely</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Recruiter misuse</td>
                            </tr>
                            <tr>
                                <th className='spotlight-grid-row' scope='row'><b style={{color:'white'}}>Networking & Growth</b></th>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>✅ Messaging + intent tags + career prep</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Vanity networking</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Job-only</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Job alerts only</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Outdated</td>
                                <td className='spotlight-graph-cells' style={{color:'white'}}>❌ Jobs only</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Carousel.Item>

            <Carousel.Item className="fairjob-carousel-scroll fairjob-carousel-items-container" style={{  paddingTop: "18%" }}>
                <div>
                    <h3 style={{ color: 'white' , "marginBottom": "25px" }} className="header-1-clamp">Join the World's First Scam-Free Job Portal!</h3>
                    <Button href="https://www.lvcfairjob.com/"> Explore Fair Job Portal</Button>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default FairJobCarousel;