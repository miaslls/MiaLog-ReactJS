function Journal() {
  return (
    <>
      <section classNameName="element" id="journal-element">
        <div classNameName="animate-element">
          <div id="journal-container">
            <div id="journal-body"></div>
            <div id="journal-label">JOURNAL</div>
            <div id="journal-band"></div>
          </div>
          <div id="pencil-container">
            <div classNameName="pencil-tip" id="tip-wood"></div>
            <div classNameName="pencil-tip" id="tip-lead"></div>
            <div id="pencil-body"></div>
            <div classNameName="pencil-metal-part"></div>
            <div classNameName="pencil-metal-part"></div>
            <div classNameName="pencil-metal-part"></div>
            <div id="pencil-eraser"></div>
          </div>
        </div>
      </section>

      <section classNameName="element-label" id="journal-element-label">
        <img
          src="assets/SVG/arrow-journal.svg"
          alt="arrow"
          classNameName="label-arrow"
          id="journal-element-label-arrow"
        />
        <div classNameName="element-label-text" id="journal-element-label-text">
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
