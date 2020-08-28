export default function snakeize(obj) {
  let result = {};

  for (let key in obj) {
    result[camelToSnakeCase(key)] = obj[key];
  }

  return result;
}

function camelToSnakeCase(key) {
  return key.replace(/([A-Z])/g, "_$1").toLowerCase();
}
