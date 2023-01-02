const _getGcd = (num1, num2) => {
  if (num1 < num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  const left = num1 % num2;
  return left === 0 ? num2 : _getGcd(num2, left);
};

function solution(denum1, num1, denum2, num2) {
  const 분자 = denum1 * num2 + denum2 * num1;
  const 분모 = num1 * num2;
  const 최대공약수 = _getGcd(분자, 분모);
  return [분자 / 최대공약수, 분모 / 최대공약수];
}
