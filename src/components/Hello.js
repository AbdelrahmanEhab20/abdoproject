const name = "Abdelrahman Ehab";
const callingMEssage = () => "Testing Message";
function Hello() {
  return (
    <h1>
      Hello {name},<br />
      calculation of 30+51 = {30 + 51},<br />
      message is :{callingMEssage()} ,<br />
      this is your first functional component
      <hr />
    </h1>
  );
}

export default Hello;
