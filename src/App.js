import "./App.css";
import { useState } from "react";
import { folderData } from "./data/folderData";
import Folder from "./component/Folder";
import useTraverseTree from "./hooks/insertNewNode";

function App() {
  const [folder, setFolder] = useState(folderData);
  const { insertNode } = useTraverseTree();
  // console.log(insertNode);
  const handleInsertNode = (id, name, isFolder) => {
    const finalTree = insertNode(folder, id, name, isFolder);
    setFolder(finalTree);
  };
  // console.log(folder, "folder");
  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorer={folder} />
    </div>
  );
}

export default App;
