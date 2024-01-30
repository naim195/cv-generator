// Experience.js
import "../styles/Experience.css";

export default function Experience({
  onChange,
  companyName,
  positionTitle,
  mainResponsibilities,
  dateFrom,
  dateUntil,
}) {
  return (
    <form>
      <h2>Experience</h2>
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        onChange={onChange}
        name="companyName"
        value={companyName}
      />
      <br />
      <label htmlFor="positionTitle">Position Title:</label>
      <input
        type="text"
        onChange={onChange}
        name="positionTitle"
        value={positionTitle}
      />
      <br />
      <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
      <input
        type="text"
        onChange={onChange}
        name="mainResponsibilities"
        value={mainResponsibilities}
      />
      <br />
      <label htmlFor="dateFrom">Date From:</label>
      <input type="text" onChange={onChange} name="dateFrom" value={dateFrom} />
      <br />
      <label htmlFor="dateUntil">Date Until:</label>
      <input
        type="text"
        onChange={onChange}
        name="dateUntil"
        value={dateUntil}
      />
    </form>
  );
}
