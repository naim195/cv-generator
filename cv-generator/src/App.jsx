import { useState } from "react";
import PersonalInfo from "./components/PersonalDetails";
import CV from "./components/CV";

function App() {
  const [infoDetails, setInfoDetails] = useState({ name: "", phoneNumber: "", email: "" })
  
  function handleInfoChange(event) {
    const { name, value } = event.target;
    setInfoDetails((prevInfoDetails) => ({ ...prevInfoDetails, [name]: value }))
    console.log(value);
  }
  
  
  
  return (
    <>
      <PersonalInfo
        onChange={handleInfoChange}
        name={infoDetails.name}
        email={infoDetails.email}
        phoneNumber={infoDetails.phoneNumber}
      />
      <CV
        personalInfo={infoDetails}
      />

      
    </>
  );
}

export default App;
