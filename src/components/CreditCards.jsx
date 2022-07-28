function CreditCards() {
  return (
    <>
      <section class="element" id="creditcards-element">
        <div class="animate-element">
          <div class="creditcard-container" id="creditcard-back-container">
            <div id="creditcard-back-stripe"></div>
          </div>
          <div class="creditcard-container" id="creditcard-front-container">
            <div id="creditcatd-chip-container">
              <div class="creditcard-chip-part" id="chip-part-a1"></div>
              <div class="creditcard-chip-part" id="chip-part-a2"></div>
              <div class="creditcard-chip-part" id="chip-part-b1"></div>
              <div class="creditcard-chip-part" id="chip-part-b2"></div>
            </div>
            <div id="creditcard-details">
              <div id="creditcard-numbers-container">
                <div class="creditcatd-number-block"></div>
                <div class="creditcatd-number-block"></div>
                <div class="creditcatd-number-block"></div>
                <div class="creditcatd-number-block"></div>
              </div>
              <div id="creditcard-name-container"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="element-label" id="creditcards-element-label">
        <img
          src="assets/SVG/arrow-finances.svg"
          alt="arrow"
          class="label-arrow"
          id="creditcards-element-label-arrow"
        />
        <div class="element-label-text" id="creditcards-element-label-text">
          <h2>finances</h2>
        </div>
      </section>
    </>
  );
}

export default CreditCards;
