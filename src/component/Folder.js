import React from "react";
import { useState } from "react";
import "./Folder.css";

const Folder = ({ explorer }) => {
  console.log("explorer", explorer);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {
        <>
          <div className='explorer' onClick={() => setOpen(!open)}>
            <span>
              {explorer.isFolder ? "📁" : "🗒️"}
              {explorer.name}
            </span>
            {explorer.isFolder && (
              <span>
                <button>+ Folder</button>
                <button>+ File</button>
              </span>
            )}
          </div>
          {open &&
            explorer?.items?.map((i) => (
              <div style={{ paddingLeft: "10px" }}>
                <Folder explorer={i} />
              </div>
            ))}
        </>
      }

      {/* {folderData.items.map((item) => {
        return <div>{item.name}</div>;
      })} */}
    </div>
  );
};

export default Folder;
