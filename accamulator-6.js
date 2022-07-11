let arr = [1, 2, 3, 4, 55, 57, 54, 58, 56, 45, 41, 49]
let accamulatorOdd = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        accamulatorOdd.push(arr[i])
    }
}