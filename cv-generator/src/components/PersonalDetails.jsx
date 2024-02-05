import { TextField } from "@mui/material";
import "../styles/PersonalInfo.css";

export default function PersonalInfo({
  onChange,
  name,
  email,
  phoneNumber,
  year,
  branch,
}) {
  return (
    <form>
      <h2>Personal Details</h2>
      <TextField
        type="text"
        onChange={onChange}
        label="Name"
        name="name"
        value={name}
        variant="outlined"
      />
      <br />
      <TextField
        type="email"
        onChange={onChange}
        label="E-mail"
        name="email"
        value={email}
        variant="outlined"
      />
      <br />
      <TextField
        type="text"
        onChange={onChange}
        label="Phone Number"
        name="phoneNumber"
        value={phoneNumber}
        variant="outlined"
      />
      <br />
      <TextField
        type="text"
        onChange={onChange}
        label="Year"
        name="year"
        value={year}
        variant="outlined"
      />
      <br />
      <TextField
        type="text"
        onChange={onChange}
        label="Branch"
        name="branch"
        value={branch}
        variant="outlined"
      />
    </form>
  );
}
