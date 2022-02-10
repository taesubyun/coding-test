// function main(output) {
//     for (let i = 0; i < output; i++) {
//         // 큰 반복문은 줄의 갯수,
//         for (let j = 0; j < output - i; j++) {
//             // 찍히는 별의 갯수
//             process.stdout.write('*');
//         }
//         console.log();
//     }
// }
// main(3);

// function main2(output) {
//     for (let i = 0; i < output; i++) {
//         // 큰 반복문은 줄의 갯수,
//         for (let j = 0; j < i + 1; j++) {
//             process.stdout.write('*');
//         }
//         console.log();
//     }
// }
// main2(5);

// function something(x) {
//     for (let i = 0; i < x; i++) {
//         for (let j = 0; j < i + 1; j++) {
//             process.stdout.write('*');
//         }
//         console.log();
//     }
// }
// something(4);

////////////////////////////////////////////////////////////////////////////////

// function main(input) {
//     cnt = 0;
//     for (let i = 0; i < input; i++) {
//         cnt += check369(i);
//     }
//     console.log(cnt);
// }
// main(10);

// function check369(num) {
//     str = num.toString();
//     cnt = 0;

//     for (let i = 0; i < 1; i++) {
//         if (str[i] == '3' || str[i] == '6' || str[i] == '9') {
//             cnt += 1;
//         }
//     }
//     return cnt;
// }

////////////////////////////////////////////////////////////////////////////////

// function main(input) {
//     let output = 0;
//     for (let i = 1; i <= input; i++) {
//         if (input % i === 0) {
//             output += i;
//         }
//     }
//     console.log(output);
// }

// main(10);

// function main(input) {
//     let sum = 0;
//     for (let i = 0; i <= input; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// main(1000);

// function main(input) {
//     let sum = 0;
//     for (let i = 0; i <= input; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// main(4);

function main(input) {
    const str = input;
    console.log(str.split('').reverse().join(''));
}

main('1234567');
