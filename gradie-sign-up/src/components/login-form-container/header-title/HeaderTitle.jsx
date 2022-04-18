import "./styles.css";

export const HeaderTitle = () => {
  return (
    <div className="header-title">
      <div className="text-container">
        <h4>Gradie</h4>
        <p>Beautiful gradients in seconds</p>
      </div>
      <img
        src="./assets/iphone-mockup.png"
        alt="iPhone Mockup"
        className="sub-img"
      />
    </div>
  );
};
