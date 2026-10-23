const factorial = function(n) {
  let answer = 1;
  if (n === 0 || n === 1){
    return 1;
  }
	for (;n > 0;n--) {
    answer += n * (n-1);
  }
  return answer;
};

console.log(factorial(2));