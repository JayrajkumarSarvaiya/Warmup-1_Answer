function stringE(str){
  let len = str.length;
  let count = 0;
  
  for(let i=0; i<len; i++)
  {
    if(str.charAt(i) == 'e')
    {
      count ++;
    }
  }
  if(count >=1 && count <=3)
  {
    return true;
  }
  else
  {
    return false;
  }
}