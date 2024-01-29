export default function PersonalInfo({ onChange, name, email, phoneNumber }) {
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
      <input type="text" onChange={onChange} name="phoneNumber" value={phoneNumber} />
      
    </form>
  );
}
