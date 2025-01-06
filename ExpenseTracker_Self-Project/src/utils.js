function capitalize(str) {
  const firstLetter = str.slice(0, 1).toUpperCase();
  str = firstLetter + str.split("").splice(1).join("");
  return str;
}


export {capitalize}