import { Fragment } from "react";

function Greeting(props) {
  return (
    <Fragment>
      <h1>Hello, {props.name} {props.surname}!</h1>
      <h2>this text was not there</h2>
    </Fragment>
  );
}

export default Greeting;
