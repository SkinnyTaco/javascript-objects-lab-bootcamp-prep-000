var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObject = Object.assign({}, obj, { [key] : value});
  return newObject;
}
