import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <>
      <div className="about">
        <Fade top>
          <div className="title">
            <h1>ABOUT</h1>
            <div className="title-divider"></div>
          </div>
        </Fade>

        <div className="about__content">
          <Fade bottom delay={0}>
            <div className="about__profile">
              <div className="about__profile--title">
                <h2>PROFILE</h2>
              </div>
              <div className="about__profile--content">
                <div className="about__profile--text">SEOYEON LEE</div>
                <div className="about__profile--buttons">
                  <button
                    onClick={() => window.open("https://velog.io/@syxxne")}
                  >
                    VELOG |
                  </button>
                  <button
                    onClick={() => window.open("https://github.com/syxxne")}
                  >
                    GITHUB |
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://easy-troodon-ca2.notion.site/syxxne-d0a660c6e7064c8387ec7041cb8630dd"
                      )
                    }
                  >
                    NOTION
                  </button>
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={500}>
            <div className="about__experience">
              <div className="about__experience--title">
                <h2>EXPERIENCE</h2>
              </div>
              <div className="about__experience--content">
                <div className="about__experience--box">
                  📚 GDSC CAU <br />
                  📆 2021.09 - 2022.07
                </div>
                <div className="thin-divider"></div>
                <div className="about__experience--box">
                  📚 Coding On X POSCO Web 개발 과정
                  <br />
                  📆 2023.07 - 2023.12
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={500}>
            <div className="about__skills">
              <div className="about__skills--title">
                <h2>SKILLS</h2>
              </div>
              <div className="about__skills--content">
                <div className="about__skills--box">
                  <img
                    src="https://syxxne.github.io/portfolio/images/html5.png"
                    alt="html5"
                    className="about__skills--icon"
                  />
                  HTML5
                </div>
                <div className="about__skills--box">
                  <img
                    src="https://syxxne.github.io/portfolio/images/css.png"
                    alt="css"
                    className="about__skills--icon"
                  />
                  CSS
                </div>
                <div className="about__skills--box">
                  <img
                    src="https://syxxne.github.io/portfolio/images/javascript.png"
                    alt="javascript"
                    className="about__skills--icon"
                  />
                  JavaScript
                </div>
                <div className="about__skills--box">
                  <img
                    src="https://syxxne.github.io/portfolio/images/sass.png"
                    alt="sass"
                    className="about__skills--icon"
                  />
                  Sass
                </div>
                <div className="about__skills--box">
                  <img
                    src="https://syxxne.github.io/portfolio/images/react.png"
                    alt="react"
                    className="about__skills--icon"
                  />
                  React
                </div>
                <div className="about__skills--box">
                  <img
                    src="https://syxxne.github.io/portfolio/images/nodejs.png"
                    alt="node.js"
                    className="about__skills--icon"
                  />
                  Node.js
                </div>
                <div className="about__skills--box">
                  <img
                    src="https://syxxne.github.io/portfolio/images/express.png"
                    alt="express"
                    className="about__skills--icon"
                  />
                  Express
                </div>
                <div className="about__skills--box">
                  <img
                    src="https://syxxne.github.io/portfolio/images/flutter.png"
                    alt="flutter"
                    className="about__skills--icon"
                  />
                  Flutter
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
