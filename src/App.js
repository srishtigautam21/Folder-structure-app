import "./App.css";
import { useState } from "react";
import { folderData } from "./data/folderData";
import Folder from "./component/Folder";

function App() {
  const [folder, setFolder] = useState(folderData);
  // console.log(folder, "folder");
  return (
    <div>
      <Folder explorer={folder} />
    </div>
  );
}

export default App;
