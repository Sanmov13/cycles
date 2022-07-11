let arr = ['Andrew', 'Andy', 'Bob', 'lecha', 'Supyan', 'Ali', 'Lecha', 'Port', 'Portu', 'Said-Selim']
let accamulator = []

for (let i  = 0; i < arr.length; i++) {
    if (arr[i].startsWith('A')) {
        accamulator.push(arr[i])
    }
}