import React, { useState } from "react";

const FormComp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const handleChange = (event) => {
    if (event.target.name === "FName") {
      setFirstName(event.target.value);
      //   console.log("firstName #####");
      //   console.log(firstName);
    } else if (event.target.name === "LName") {
      setLastName(event.target.value);
      //   console.log("lastName ###### ");
      //   console.log(lastName);
    } else if (event.target.name === "age") {
      setAge(event.target.value);
      //   console.log("age ###### ");
      //   console.log(age);
    }
  };
  //################################
  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    console.log({
      fname: firstName,
      lname: lastName,
      age: age,
    });
  };
  ///#############################################

  return (
    <div>
      <h1> ### Form ###</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="First Name"
          name="FName"
          value={firstName}
        ></input>
        <br />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
          name="LName"
          value={lastName}
        ></input>
        <br />
        <input
          type="number"
          onChange={handleChange}
          placeholder="Age"
          name="age"
          value={age}
        ></input>
        <br />
        <button type="submit">Submit Data</button>
      </form>
    </div>
  );
};

export default FormComp;
