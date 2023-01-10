import "react-multi-carousel/lib/styles.css";
export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="about" id="abouts">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>About Me</h2>
              <h3>Let check some information about me...</h3>
              <p>
                Every great developer you know got there by solving problems
                they were unqualified to solve until they actually did it
              </p>
              <span className="button-color">
                <a href="https://drive.google.com/file/d/1V4CDmu2vfaAk7crRzdfcuKq37yDu0gX1/view?usp=sharing" target="_blank"><button className="vvd1">Resume</button></a>
                <a href="https://drive.google.com/file/d/1VqsN_0B_FnrlxwBrYMAg0VwkJymHn_6D/view?usp=drivesdk" target="_blank"><button className="vvd1">Manual</button></a>
                <button className="vvd1">Achievements</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
