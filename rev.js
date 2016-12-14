/* Comment */

function reverse(s) {
  return s.split('').reverse().join('');
}

function palindrome(string)
{
var re = /[\W_]/g;//[^a-zA-Z0-9]/g
var lowerregstr=string.toLowerCase().replace(re, "");
console.log("string "+lowerregstr);
var reversestr= lowerregstr.split('').reverse().join('');
console.log ("reverse string is ",+reversestr);
if( lowerregstr==reversestr){
	return true;
}
else 
	return false;
}