module.exports = function getZerosCount(number, base) {
  let res = [];
  for (let i = 2; i <= base; i++) { //search all primes that divide base
    if (base % i == 0){
      let power = 0; sum = 0; temp = number;
        while (base % i == 0) {
          power++;
          base /= i;
          }
        while (temp / i > 0) {
          temp = Math.floor(temp / i);
          sum += temp;
          }
        res.push(Math.floor(sum / power));
      }
    }
  return Math.min.apply(Math, res);
  }