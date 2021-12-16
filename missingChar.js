function missingChar(str, n){
  let len = str.length;
  
  return str.substring(0,n) + str.substring(n+1,len);
}