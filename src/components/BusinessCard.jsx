function BusinessCard() {
  return (
    <>
      <section className="element" id="businesscard-element">
        <div className="animate-element">
          <div id="businesscard-container">
            <div id="user-icon">
              <i className="ri-user-line"></i>
            </div>
            <div id="user-name">miaslls</div>
          </div>
        </div>
      </section>

      <section className="element-label" id="businesscard-element-label">
        <img
          src="assets/SVG/arrow-logout.svg"
          alt="arrow"
          className="label-arrow"
          id="businesscard-element-label-arrow"
        />
        <div
          className="element-label-text"
          id="businesscard-element-label-text"
        >
          <h2>logout</h2>
        </div>
      </section>
    </>
  );
}

export default BusinessCard;
