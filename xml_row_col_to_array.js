var convertCharToNum = function(s) {
  result = 0;
  for(var i=0; i<s.length; i++){
    result *= 26;
    result += s.charCodeAt(i) - 64;
  }
  return result;
}

var excelColToArray = function(str) {
  var arr = [0, 0, 0, 0];
  var splStr = str.split(":");
  var strReg = /[A-Z]+/;
  var numReg = /[0-9]+/;
  var ind = 0;

  for (var i=0; i<2; i++){
    var string = splStr[i].match(strReg);
    string = convertCharToNum(string);
    arr[ind] = string;
    ind ++;
    var number = parseInt(splStr[i].match(numReg)) - 1;
    arr[ind] = string;
    ind ++;
  }
  return arr;
}
