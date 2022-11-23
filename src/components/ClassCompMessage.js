import { Component } from "react";
class Message extends Component {
  render() {
    // console.log(this.props.messageContent);
    return <h1>{this.props.messageContent}</h1>;
  }
}
export default Message;
