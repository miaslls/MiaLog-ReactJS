function Calculator() {
  return (
    <>
      <section class="element" id="calculator-element">
        <div class="animate-element">
          <div id="calculator-container">
            <div id="calculator-solar-container">
              <div class="calculator-solar-part"></div>
              <div class="calculator-solar-part"></div>
              <div class="calculator-solar-part"></div>
              <div class="calculator-solar-part"></div>
              <div class="calculator-solar-part"></div>
              <div class="calculator-solar-part"></div>
              <div class="calculator-solar-part"></div>
              <div class="calculator-solar-part"></div>
            </div>

            <div id="calculator-display">
              <div id="calculator-display-text">1 + 2 = 4</div>
            </div>

            <div id="calculator-button-container">
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>
              <div class="calculator-button-small"></div>

              <div id="calculator-button-large"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="element-label" id="calculator-element-label">
        <img
          src="assets/SVG/arrow-calculator.svg"
          alt="arrow"
          class="label-arrow"
          id="calculator-element-label-arrow"
        />

        <div class="element-label-text" id="calculator-element-label-text">
          <h2>calculator</h2>
        </div>
      </section>
    </>
  );
}

export default Calculator;
