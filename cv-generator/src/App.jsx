import { useState } from "react";
import PersonalInfo from "./components/PersonalDetails";
import CV from "./components/CV";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

function App() {
  const [infoDetails, setInfoDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  function handleInfoChange(event) {
    const { name, value } = event.target;
    setInfoDetails((prevInfoDetails) => ({
      ...prevInfoDetails,
      [name]: value,
    }));
  }

  return (
    <div className="app">
      <div className="input-form">
        <PersonalInfo
          onChange={handleInfoChange}
          name={infoDetails.name}
          email={infoDetails.email}
          phoneNumber={infoDetails.phoneNumber}
        />
        <Education
          onChange={handleInfoChange}
          schoolName={infoDetails.schoolName}
          titleOfStudy={infoDetails.titleOfStudy}
          dateOfStudy={infoDetails.dateOfStudy}
        />
        <Experience
          onChange={handleInfoChange}
          companyName={infoDetails.companyName}
          positionTitle={infoDetails.positionTitle}
          mainResponsibilities={infoDetails.mainResponsibilities}
          dateFrom={infoDetails.dateFrom}
          dateUntil={infoDetails.dateUntil}
        />
      </div>
      <CV
        personalInfo={{
          name: infoDetails.name,
          email: infoDetails.email,
          phoneNumber: infoDetails.phoneNumber,
        }}
        education={{
          schoolName: infoDetails.schoolName,
          titleOfStudy: infoDetails.titleOfStudy,
          dateOfStudy: infoDetails.dateOfStudy,
        }}
        experience={{
          companyName: infoDetails.companyName,
          positionTitle: infoDetails.positionTitle,
          mainResponsibilities: infoDetails.mainResponsibilities,
          dateFrom: infoDetails.dateFrom,
          dateUntil: infoDetails.dateUntil,
        }}
      />
    </div>
  );
}

export default App;
