function Journal() {
  return (
    <>
      <section class="element" id="journal-element">
        <div class="animate-element">
          <div id="journal-container">
            <div id="journal-body"></div>
            <div id="journal-label">JOURNAL</div>
            <div id="journal-band"></div>
          </div>
          <div id="pencil-container">
            <div class="pencil-tip" id="tip-wood"></div>
            <div class="pencil-tip" id="tip-lead"></div>
            <div id="pencil-body"></div>
            <div class="pencil-metal-part"></div>
            <div class="pencil-metal-part"></div>
            <div class="pencil-metal-part"></div>
            <div id="pencil-eraser"></div>
          </div>
        </div>
      </section>

      <section class="element-label" id="journal-element-label">
        <img
          src="assets/SVG/arrow-journal.svg"
          alt="arrow"
          class="label-arrow"
          id="journal-element-label-arrow"
        />
        <div class="element-label-text" id="journal-element-label-text">
          <h2>JOURNAL</h2>
          <ul>
            <li>moods</li>
            <li>journal</li>
            <li>statistics</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Journal;
