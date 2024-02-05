// Education.js
import "../styles/Education.css";
import TextField from "@mui/material/TextField";

export default function Education({
  onChange,
  schoolName,
  titleOfStudy,
  dateOfStudy,
}) {
  return (
    <form>
      <h2>Education</h2>
      <label htmlFor="schoolName">School Name:</label>
      <input
        type="text"
        onChange={onChange}
        name="schoolName"
        value={schoolName}
      />
      <br />
      <label htmlFor="titleOfStudy">Title of Study:</label>
      <input
        type="text"
        onChange={onChange}
        name="titleOfStudy"
        value={titleOfStudy}
      />
      <br />
      <label htmlFor="dateOfStudy">Date of Study:</label>
      <input
        type="text"
        onChange={onChange}
        name="dateOfStudy"
        value={dateOfStudy}
      />
    </form>
  );
}
