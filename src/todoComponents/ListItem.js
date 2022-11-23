import React from "react";
import "./css/tableItems.css";
const ListItem = (props) => {
  console.log(props);
  return (
    <tr>
      <td className="tableItemT">{props.id}</td>
      <td>{props.name}</td>
    </tr>
  );
};

export default ListItem;
