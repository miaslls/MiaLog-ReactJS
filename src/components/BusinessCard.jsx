function BusinessCard() {
  return (
    <>
      <section class="element" id="businesscard-element">
        <div class="animate-element">
          <div id="businesscard-container">
            <div id="user-icon">
              <i class="ri-user-line"></i>
            </div>
            <div id="user-name">miaslls</div>
          </div>
        </div>
      </section>

      <section class="element-label" id="businesscard-element-label">
        <img
          src="assets/SVG/arrow-logout.svg"
          alt="arrow"
          class="label-arrow"
          id="businesscard-element-label-arrow"
        />
        <div class="element-label-text" id="businesscard-element-label-text">
          <h2>logout</h2>
        </div>
      </section>
    </>
  );
}

export default BusinessCard;
