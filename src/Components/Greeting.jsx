function Greeting(props) {
  return (
    <div style={{ backgroundColor: "pink", padding: "20px" }}>
      <h1>Hello, {props.name} {props.surname}!</h1>
      <h2>this text was not there</h2>
    </div>
  );
}

export default Greeting;
