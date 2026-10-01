function somar(a, b) {
  if (isNaN(a || b)) {
    return "Os valores digitados devem ser números";
  }
  return Number(a) + Number(b);
}

exports.somar = somar;
