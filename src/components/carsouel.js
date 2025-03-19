import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style.css";

function UncontrolledExample() {
  const styles = {
    carouselContainer: {
      height: window.innerWidth <= 768 ? '80vh' : '100vh',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '-2px'
    },
    videoWrapper: {
      height: window.innerWidth <= 768 ? '80vh' : '100vh',
      width: '100%',
      position: 'relative'
    },
    video: {
      width: '100%',
      height: window.innerWidth <= 768 ? '80vh' : '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0
    },
    caption: {
      position: 'absolute',
      top: '40%',
      transform: 'translateY(-50%)',
      left: '10%',
      right: '10%',
      textAlign: 'left',
      maxWidth: window.innerWidth <= 768 ? '100%' : '800px'
    }
  };

  return (
    <div style={styles.carouselContainer}>
      <Carousel interval={2000} controls={true} indicators={false} slide>
        <Carousel.Item>
          <div style={styles.videoWrapper}>
            <video
              style={styles.video}
              src="https://videos.pexels.com/video-files/7308103/7308103-hd_1920_1080_24fps.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div style={styles.caption} className="carousel-caption-style">
              <h1>Expertly built websites, every time.</h1>
              <hr />
              <p className="carousel-description">
                Whether you're looking to grow your e-commerce site or refine
                your marketing site, we can help.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={styles.videoWrapper}>
            <video
              style={styles.video}
              src="https://videos.pexels.com/video-files/4017225/4017225-uhd_2560_1440_30fps.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div style={styles.caption} className="carousel-caption-style">
              <h1>Software Solutions.</h1>
              <hr />
              <p className="carousel-description">
                We help teams and businesses thrive through technology.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={styles.videoWrapper}>
            <video
              style={styles.video}
              src="https://videos.pexels.com/video-files/852423/852423-hd_1920_1080_24fps.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div style={styles.caption} className="carousel-caption-style">
              <h1>Future-Ready Solutions</h1>
              <hr />
              <p className="carousel-description">
                Leverage our expertise in cloud transformation and engineering excellence
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;