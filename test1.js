let arrLen = 0;
let data;
let range;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) {
    if (!arrLen) {
        arrLen = +line;
    } else if (!data) {
        data = line.split(' ').map((el) => +el);
    } else if (!range) {
        range = line.split(' ').map((el) => +el);
    } else {
        rl.close();
    }
}).on('close', function () {
    process.exit();
});

/*

5
2 6 8 9 10
1 5

*/

/*


문제 이해
- arrLen, data, range

1. 첫번째 인자로 5가 들어간다.
-  

2. 5개의 자연수가 나열된다.
- for(문)으로 5개의 자연수를 나열한다.

3. n ~ m 까지의 합을 구한다.
- for문으로 나열된 자연수들 중에서 조건문으로 n ~ m에 해당하는 자연수들을 더해준다.

*/

function solution1(arrLen, data, range) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (range[0] - 1 <= i && i <= range[1] - 1) {
            sum += data[i];
        }
    }
    return sum;
}

function solution2(arrLen, data, range) {
    let sum = 0;
    for (let i = range[0] - 1; i <= range[1] - 1; i++) {
        sum += data[i];
    }
    return sum;
}
