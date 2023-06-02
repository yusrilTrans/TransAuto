class RandomizedDataSource {
  generateRandomName() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = 'CDD-';
    for (let i = 0; i < 3; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    result += '-';
    for (let i = 0; i < 3; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }
}

export default RandomizedDataSource;
