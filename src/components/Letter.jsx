function Letter() {
  return (
    <>
      <section class="element" id="letter-element">
        <div class="animate-element">
          <div id="letter-container">
            <div id="letter-logo">
              <i class="ri-emotion-2-line"></i>
            </div>
            <h1>
              <div id="letter-title">
                Mia<span>Logs</span>
              </div>
            </h1>
          </div>
          <div id="envelope-container">
            <div id="envelope-flap"></div>
            <div id="envelope-label"></div>
          </div>
        </div>
      </section>

      <section class="element-label" id="letter-element-label">
        <img
          src="assets/SVG/arrow-about.svg"
          alt="arrow"
          class="label-arrow"
          id="letter-element-label-arrow"
        />
        <div class="element-label-text" id="letter-element-label-text">
          <h2>ABOUT</h2>
          <ul>
            <li>
              Mia<span>Logs</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Letter;
