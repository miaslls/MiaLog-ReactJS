import "../assets/CSS/Notes.css";
import arrow from "../assets/SVG/arrow-notes.svg";

function FunctionName() {
  return (
    <>
      <section className="element" id="notes-element">
        <div className="animate-element">
          <div id="notes-container">
            <div id="notes-title">NOTES</div>
          </div>
        </div>
      </section>

      <section className="element-label" id="notes-element-label">
        <img
          src={arrow}
          alt="arrow"
          className="label-arrow"
          id="notes-element-label-arrow"
        />
        <div className="element-label-text" id="notes-element-label-text">
          <h2>notes</h2>
        </div>
      </section>
    </>
  );
}

export default FunctionName;
