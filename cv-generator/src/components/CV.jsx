import "../styles/CV.css";

export default function CV({ personalInfo, education, experience }) {
  return (
    <div className="cv-body">
      <h2>{personalInfo.name}</h2>
      <div className="contact-details">
        <span>{personalInfo.phoneNumber}</span>
        <span>{personalInfo.email}</span>
      </div>
      <div className="education-details">
        <h3>Education</h3>
        <p>{education.schoolName}</p>
        <p>{education.titleOfStudy}</p>
        <p>{education.dateOfStudy}</p>
      </div>
      <div className="experience-details">
        <h3>Experience</h3>
        <p>{experience.companyName}</p>
        <p>{experience.positionTitle}</p>
        <p>{experience.mainResponsibilities}</p>
        <p>
          {experience.dateFrom} - {experience.dateUntil}
        </p>
      </div>
    </div>
  );
}
