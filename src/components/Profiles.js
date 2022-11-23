function Profile(props) {
  const { name, age } = props;
  return (
    <h1>
      Hello : {name}, age : {age}
      <br />
      <hr />
    </h1>
  );
}

export default Profile;
