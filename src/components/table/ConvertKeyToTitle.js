export const convertKeyToTitle = (key) => {
  let result = key[0].toUpperCase();
  for (let i = 1; i < key.length; i++) {
    const char = key[i];
    if (char === char.toUpperCase() && isNaN(char)) {
      result += ' ' + char;
    } else {
      result += char;
    }
  }
  return result;
};
