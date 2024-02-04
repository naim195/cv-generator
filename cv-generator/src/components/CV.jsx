import "../styles/CV.css";

export default function CV({ personalInfo, education, experience }) {
  return (
    <div className="cv-body">
      <h2>{personalInfo.name}</h2>      
        
      <div className="details">
        <div className="branch">
          <div>{personalInfo.year} Year Undergraduate</div>
          <div>Department Of {personalInfo.branch}</div>
        </div>
        <div className="contact-details">
          <div>{personalInfo.email}</div>
          <div>{personalInfo.phoneNumber}</div>
        </div>
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
