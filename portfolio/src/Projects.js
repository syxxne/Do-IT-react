import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Fade from "react-reveal/Fade";

export default function Projects() {
  return (
    <>
      <div className="projects">
        <Fade top>
          <div className="title">
            <h1>PROJECTS</h1>
            <div className="title-divider"></div>
          </div>
        </Fade>

        <div className="projects__content">
          <Fade bottom delay={0}>
            <div className="project__box">
              <div className="projects__explanation">
                <h2 className="projects__name">기온별 옷차림</h2>
                <p>📆 22.10.04 - 22.12.06</p>
                <p>🙍‍♀️ 4명</p>
                <p>💻 기획 디자인 프론트엔드 퍼블리싱</p>
                <p>🔧 DART FLUTTER FIREBASE</p>
                <p>
                  📋 날씨에 맞춰 옷차림을 추천해주는 안드로이드 어플리케이션
                </p>
                <button
                  className="projects__button"
                  onClick={() =>
                    window.open(
                      "https://github.com/syxxne/weather_dressing_app"
                    )
                  }
                >
                  GITHUB
                </button>
              </div>

              <div className="projects__pictures">
                <Carousel
                  showArrows={true}
                  showIndicators={false}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  swipeable={true}
                  className="projects__carousel"
                >
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/1-1.JPG" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/1-2.JPG" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/1-3.JPG" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/1-4.JPG" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/1-5.JPG" />
                  </div>
                </Carousel>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={1000}>
            <div className="project__box" style={{ marginBottom: "80px" }}>
              <div className="projects__explanation">
                <h2 className="projects__name">Life Manager</h2>
                <p>📆 23.07.17 - 23.07.26</p>
                <p>🙍‍♀️ 3명</p>
                <p>💻 기획 디자인 프론트엔드 퍼블리싱</p>
                <p>🔧 HTML/CSS JavaScript SCSS</p>
                <p>
                  📋 SNS, Health, To-do List를 작성 및 관리할 수 있는 개인화
                  웹페이지
                </p>
                <p>📋 반응형 디자인</p>
                <button
                  className="projects__button"
                  onClick={() =>
                    window.open("https://github.com/syxxne/KDT_project1")
                  }
                >
                  GITHUB
                </button>
                <button
                  className="projects__button"
                  onClick={() =>
                    window.open("https://lifemanagerbyh2j.netlify.app")
                  }
                >
                  LINK
                </button>
              </div>

              <div className="projects__pictures">
                <Carousel
                  showArrows={true}
                  showIndicators={false}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  swipeable={true}
                  className="projects__carousel"
                >
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/2-1.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/2-2.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/2-3.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/2-4.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/2-5.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/2-6.png" />
                  </div>
                </Carousel>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={500}>
            <div className="project__box" style={{ marginBottom: 0 }}>
              <div className="projects__explanation">
                <h2 className="projects__name">Do-IT</h2>
                <p>📆 23.08.31 - 23.09.14</p>
                <p>🙍‍♀️ 4명</p>
                <p>💻 기획 디자인 프론트엔드 백엔드 퍼블리싱</p>
                <p>🔧 HTML/CSS JavaScript SCSS Node.js Express AWS EC2</p>
                <p>📋 Open AI API (chatGPT) 활용한 개발자 스터디 플랫폼</p>
                <p>📋 반응형 디자인</p>
                <button
                  className="projects__button"
                  onClick={() => window.open("https://github.com/syxxne/Do-IT")}
                >
                  GITHUB
                </button>
                <button
                  className="projects__button"
                  onClick={() => window.open("http://3.34.134.92/")}
                >
                  LINK
                </button>
              </div>

              <div className="projects__pictures">
                <Carousel
                  showArrows={true}
                  showIndicators={false}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  swipeable={true}
                  className="projects__carousel"
                >
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-1.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-2.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-3.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-4.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-5.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-6.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-7.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-8.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-9.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-10.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-11.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-12.png" />
                  </div>
                  <div>
                    <img src="https://syxxne.github.io/portfolio/images/3-13.png" />
                  </div>
                </Carousel>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
