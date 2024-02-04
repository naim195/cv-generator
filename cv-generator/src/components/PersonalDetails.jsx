import "../styles/PersonalInfo.css";

export default function PersonalInfo({ onChange, name, email, phoneNumber , year,branch}) {
  return (
    <form>
      <h2>Personal Details</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" onChange={onChange} name="name" value={name} />
      <br />
      <label htmlFor="email">E-mail:</label>
      <input type="email" onChange={onChange} name="email" value={email} />
      <br />
      <label htmlFor="PhNumber">Phone Number:</label>
      <input
        type="text"
        onChange={onChange}
        name="phoneNumber"
        value={phoneNumber}
      />
      <br />
      <label htmlFor="year">Year: </label>
      <input type="text" onChange={onChange} name="year" value={year} />
      <br />
      <label htmlFor="branch">Branch: </label>
      <input type="text" onChange={onChange} name="branch" value={branch} />
    </form>
  );
}
