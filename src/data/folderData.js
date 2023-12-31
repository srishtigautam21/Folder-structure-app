const folderData = {
  //Remember this: This is Collection of nested objects not array of objects
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "index.html",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 4,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 5,
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: 6,
          name: "App.css",
          isFolder: false,
          items: [],
        },
        {
          id: 7,
          name: "index.js",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: 8,
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};

export { folderData };
