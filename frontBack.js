function frontBack(str){
  let len = str.length;
  if(len == 1)
  {
    return str;
  }
  else
  return str.slice(-1) + str.slice(1,len-1) + str.slice(0,1);
}