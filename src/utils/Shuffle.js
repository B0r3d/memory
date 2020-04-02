const shuffle = array => {
  const result = [];
  while(array.length) {
    let randomIndex = Math.random() * (array.length - 1);
    result.push(array.splice(randomIndex, 1)[0]);
  }
  return result;
}

export default shuffle;