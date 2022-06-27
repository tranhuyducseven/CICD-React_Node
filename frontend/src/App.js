import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const getName = async () => {
    const response = await axios.get("/names");
    console.log(response);
    setName(response.data);
  };
  useEffect(() => {
    getName();
  }, []);

  return (
    <div className="App">
      <div>My web app</div>
      <div>My name is {name}</div>
    </div>
  );
}

export default App;
