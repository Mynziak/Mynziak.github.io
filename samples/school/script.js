var arr = [2, 3, 4, 5];
function sumChet(arr) {
    l = 0;
    summ = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            summ += arr[i];
            ++l;
        }
        return summ / l;
    }
}

console.log(sumChet(arr));
