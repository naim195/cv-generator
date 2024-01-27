export default function PersonalInfo() {
  return (
    <form>
      <h2>Personal Details</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" onChange={onChange} />
      <br />
      <label htmlFor="email">E-mail:</label>
      <input type="email" onChange={onChange}/>
      <br />
      <label htmlFor="PhNumber">Phone Number:</label>
      <input type="text" onChange={onChange}/>
      <button>Submit</button>
    </form>
  );
}
