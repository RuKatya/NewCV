import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import EnterPage from "../Components/EnterPage";
import "../../style/index.scss";

function App() {
  const [projects, setProjects] = useState();
  const [message, setMessage] = useState();
  const [show, setShow] = useState(true);

  useEffect(() => {
    async function getData() {
      await axios.get("/getProjects").then((res) => {
        // console.log(res.data);
        setProjects(res.data);

        console.log(projects);
      });
    }

    getData();
  }, []);

  console.log(projects);

  async function sendData(evt: any) {
    evt.preventDefault();
    let email: string = evt.target.elements.email.value;
    let name: string = evt.target.elements.name.value;
    let message: string = evt.target.elements.message.value;

    console.log(email, name);

    await axios.post("/sendUserData", { email, name, message }).then((res) => {
      const { message } = res.data;
      setShow(true);
      if (message) {
        console.log(message);
        setMessage(message);
        // setTimeout(() => setMessage(""), 1000);
        console.log(show);
      } else {
        console.log(res.data);
      }
    });
  }

  return (
    <div className="App">
      <EnterPage />
      {/* {projects ? <div>Yes</div> : <div>No</div>}
      <form onSubmit={sendData}>
        <input type="text" name="email" id="" />
        <input type="text" name="name" id="" />
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>

      {message ? <div>{message}</div> : null} */}
    </div>
  );
}

export default App;
