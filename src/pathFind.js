// the strings in the array correspond to the properties of the Object
//I must take a single string of the array and use it in the function pathFind(path, object) each time
//I can reduce the array of one value
//In case of multiple value in arrays i need to recurse it


//current.follow -> current.current.follow
// SRC https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
const pathFind = (path, obj) => {
  const valueProperty = path.reduce((current, follow) => { return current ? current[follow] : undefined; }, obj);
  return valueProperty
}

//missing recursion


module.exports.pathFind = pathFind
