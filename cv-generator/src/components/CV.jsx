export default function CV({personalInfo}) {
    return (
        <div>
            <h2>{personalInfo.name}</h2>
            <div>
                    <span>{personalInfo.phoneNumber}</span>
                    <span>{personalInfo.email}</span>
            </div>
        </div>
    )
}