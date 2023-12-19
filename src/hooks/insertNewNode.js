const useTraverseTree = () => {
  const insertNode = function (tree, id, name, isFolder) {
    if (tree.id === id && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: name,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, id, name, isFolder);
    });
    return { ...tree, items: latestNode };
  };
  return { insertNode };
};

export default useTraverseTree;
