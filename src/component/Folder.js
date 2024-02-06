import React from "react";
import { useState } from "react";
import "./Folder.css";

const Folder = ({ handleInsertNode = () => {}, explorer }) => {
  //   console.log("explorer", explorer);
  const [open, setOpen] = useState(false);
  const [isInput, setIsInput] = useState({
    visible: false,
    isFolder: false,
  });
  const handleInput = (e, isFolder) => {
    e.stopPropagation();
    setOpen(true);
    setIsInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const handleAddNewFolder = (e) => {
    if (e.key === "Enter" && e.target.value) {
      // console.log(e.target.value);
      handleInsertNode(explorer.id, e.target.value, isInput.isFolder);
      setIsInput({ visible: false });
    }
  };

  return (
    <div>
      {
        <div>
          <div className='explorer' onClick={() => setOpen(!open)}>
            <span>
              {explorer.isFolder ? "📁" : "🗒️"}
              {explorer.name}
            </span>
            {explorer.isFolder && (
              <span>
                <button onClick={(e) => handleInput(e, true)}>+ Folder</button>
                <button onClick={(e) => handleInput(e, false)}>+ File</button>
              </span>
            )}
          </div>

          {isInput.visible && (
            <div style={{ paddingLeft: "10px" }}>
              {isInput.isFolder ? "📁" : "🗒️"}
              <input
                type='text'
                autoFocus
                onBlur={() => setIsInput({ ...isInput, visible: false })}
                onKeyDown={(e) => handleAddNewFolder(e)}
              />
            </div>
          )}

          {open &&
            explorer?.items?.map((i) => (
              <div style={{ paddingLeft: "10px" }}>
                <Folder handleInsertNode={handleInsertNode} explorer={i} />
              </div>
            ))}
        </div>
      }
    </div>
  );
};

export default Folder;
