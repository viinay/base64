
'use strict';

let data = 'c3RhY2thYnVzZS5jb20=';  
let buff = new Buffer(data, 'base64');  
let text = buff.toString('ascii');

console.log('"' + data + '" converted from Base64 to ASCII is "' + text + '"');  
