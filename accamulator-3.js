let arr = ['css', 'c++', 'java', 'javascript', 'python', 'php', 'jo', 'ok', 'po', 'lo']
let accamulator = []

for (let i = 0; i > arr.length; i++) {
    if (arr[i].length > 3) {
        accamulator.push(arr[i])
    }
}