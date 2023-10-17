import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const goMainPage = () => {
    navigate("/");
  };

  const goAbout = () => {
    navigate("/about");
  };

  const goProjects = () => {
    navigate("/projects");
  };

  const goContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <h2 className="header__logo--text" onClick={goMainPage}>
            S
          </h2>
          <div className="header__logo--sphere">&nbsp;</div>
        </div>
        <div className="header__button">
          <button onClick={goAbout}>ABOUT |</button>
          <button onClick={goProjects}>PROJECTS |</button>
          <button onClick={goContact}>CONTACT</button>
        </div>
      </header>
    </>
  );
}
