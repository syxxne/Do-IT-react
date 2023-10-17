import Typed from "react-typed";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main__content">
          <div className="main__text">
            <Typed
              strings={[
                "Hello , SYXXNE world ! <br /> I 'm Backend developer.",
              ]}
              typeSpeed={40}
              loop={true}
              backSpeed={30}
              showCursor={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
