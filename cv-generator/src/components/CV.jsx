import "../styles/CV.css"

export default function CV({ personalInfo }) {
    return (
        <div className="cv-body">
            <h2>{personalInfo.name}</h2>
            <div className="contact-details">
                    <span>{personalInfo.phoneNumber}</span>
                    <span>{personalInfo.email}</span>
            </div>
        </div>
    )
}