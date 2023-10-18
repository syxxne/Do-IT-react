import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <Fade top>
          <div className="title">
            <h1>CONTACT</h1>
            <div className="title-divider"></div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="contact__content">
            <div className="contact__text">
              <h2>SEOYEON LEE</h2>
              <br />
              <h3>If you need to talk to me,</h3>
              <br />
              <h3>feel free to reach out to me.</h3>
              <br />
              <h3> 📧 ssyeon2513@gmail.com</h3>
              <br />
              <h3> 📞 +82 10-1234-5678</h3>
            </div>
            <div className="contact__img">
              <img
                src="https://syxxne.github.io/portfolio/images/wordcloud.png"
                width={"400px"}
                alt="wordcloud"
              />
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
