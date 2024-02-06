const useTraverseTree = () => {
  const insertNode = function (tree, id, name, isFolder) {
    if (tree.id === id && tree.isFolder) {
      //this cond is used to check if our new node insertion is at first node
      // termination condition for our recursive func.
      tree.items.unshift({
        //unshift adds item at first place in array
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
