const removeFromArray = function (array, ...arrDelete) {
  const newArray = [];
  array.forEach((item) => {
    if (!arrDelete.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
