import { useState } from "react";
import PersonalInfo from "./components/PersonalDetails";
import CV from "./components/CV";
import "./styles/App.css"

function App() {
  const [infoDetails, setInfoDetails] = useState({ name: "", phoneNumber: "", email: "" })
  
  function handleInfoChange(event) {
    const { name, value } = event.target;
    setInfoDetails((prevInfoDetails) => ({ ...prevInfoDetails, [name]: value }))
    
  }
  
  
  
  return (
    <div className="app">
      <PersonalInfo
        onChange={handleInfoChange}
        name={infoDetails.name}
        email={infoDetails.email}
        phoneNumber={infoDetails.phoneNumber}
      />
      <CV
        personalInfo={infoDetails}
      />

      
    </div>
  );
}

export default App;
