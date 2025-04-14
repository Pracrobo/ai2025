function sum_to_num(number) {
    //주어진 숫자까지의 합산을 for문으로 구현하시오
    let sum = 0;
    for(let count = 0; count <= number; count++) {
        sum = sum + count;
    }
    console.log(`${number}까지의 합산: ${sum}`);
}
sum_to_num(10);
sum_to_num(100);
sum_to_num(1_0000);
sum_to_num(10_0000);
sum_to_num(100_0000);
sum_to_num(1000_0000);
sum_to_num(10000_0000);

// 미션 주어진 숫자까지의 합산을 구하시오
// 1부터 10까지의 합은 55
// 1+ 2+ 3+ 4+ 5+ 6+ 7+ 
// 1부터 100까지의 합 5050
// 1부터 1000까지의 합은 500500
