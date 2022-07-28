function Planner() {
  return (
    <>
      <section class="element" id="planner-element">
        <div class="animate-element">
          <div id="planner-outer-container">
            <div id="planner-inner-container">
              <div id="planner-paper-container">
                <div id="planner-title">PLANNER</div>
                <div id="paper-divider"></div>
                <div class="paper-rings-container" id="rings-container-left">
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                </div>
                <div class="paper-rings-container" id="rings-container-right">
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                  <div class="paper-ring"></div>
                </div>
                <div id="paper-bindings-container">
                  <div class="paper-binding"></div>
                  <div class="paper-binding"></div>
                  <div class="paper-binding"></div>
                  <div class="paper-binding"></div>
                  <div class="paper-binding"></div>
                  <div class="paper-binding"></div>
                  <div class="paper-binding"></div>
                  <div class="paper-binding"></div>
                  <div class="paper-binding"></div>
                  <div class="paper-binding"></div>
                </div>
                <div id="paper-bookmark-container">
                  <div id="bookmark-body"></div>
                  <div id="bookmark-flag-container">
                    <div id="bookmark-flag-left"></div>
                    <div id="bookmark-flag-right"></div>
                  </div>
                </div>
                <div id="paper-tabs-container">
                  <div class="paper-tab" id="pink-tab"></div>
                  <div class="paper-tab" id="yellow-tab"></div>
                  <div class="paper-tab" id="blue-tab"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="element-label" id="planner-element-label">
        <img
          src="assets/SVG/arrow-planner.svg"
          alt="arrow"
          class="label-arrow"
          id="planner-element-label-arrow"
        />
        <div class="element-label-text" id="planner-element-label-text">
          <h2>PLANNER</h2>
          <ul>
            <li>to-dos</li>
            <li>calendar</li>
            <li>shopping list</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Planner;
