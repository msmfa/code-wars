/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!
If you like this Kata, please*/

function capitalize(string) {
  const evenString = string
    .split("")
    .map(function(item, index) {
      if (index % 2 === 0) return item.toUpperCase();
      else return item;
    })
    .join("");

  const oddString = string
    .split("")
    .map(function(item, index) {
      if (index % 2 != 0) return item.toUpperCase();
      else return item;
    })
    .join("");
  return [evenString, oddString];
}
