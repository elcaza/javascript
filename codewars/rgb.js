const rgb = (r,g,b) => `${decHex(r)}${decHex(g)}${decHex(b)}`;
const decHex = (str) => {
 const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
 let dec = '';
 while(str > 0) {
   dec = dec.concat(hex[Number(str)%16]);
   str = Math.trunc(Number(str)/16);
 }
 return dec.split("").reverse().join("");
};

console.log(rgb(0,0,0));