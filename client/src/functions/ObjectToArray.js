export default function ObjectToArray(elem) {
  let array = [];
  for (const key in elem) {
    array.push(elem[key]);
  }
  // console.log(array);
  return array;
}
