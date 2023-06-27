const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
   
    var str='';
   
    if(n%2==0){
        str = 'even';
    }else{
         str = 'odd';   
    }
    
   // console.log(n,'is',str);
    console.log(`${n} is ${str}`);
});