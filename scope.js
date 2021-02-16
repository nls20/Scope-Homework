// var filterNamesByFirstLetter = function (names, letter) {
//     let filteredNames = [];
//     for (let name of names) {
//         if (name[0] === letter) {
//             filteredNames.push(name)
//         }
//     }
//     console.log("name after loop:", name)
//     return filteredNames;
// }

// var students = ['Alice', 'Bob', 'Alyson', 'Artem', 'Babs']
// var filteredStudents = filterNamesByFirstLetter(students, 'A');
// console.log('filteredStudents:', filteredStudents)

// let temperature = 30;
// let jacket

// if (temparture)

// const calculateEnergy = function (mass) {
//     const speedOfLight = 299792458;
//     return mass * speedOfLight ** 2;
// }

// const energyOfMe = calculateEnergy(75);
// console.log('energyOfMe (if I had a mass of 75kg)', energyOfMe)

const song = {
    title: 'Raspberry Beret', 
    artist: 'Prince'
}

console.log('song before mutation', song)
song.title = 'When Doves Cry'
song.duration = '120s'
console.log('song after mutation', song)

const songs = [
    song, 
    'Happy Birthday',
    'Hey Jude'
]

console.log('songs array before mutation:', songs)
songs[1] = 'Call Me Maybe'
songs.pop()
console.log('songs array after mutation', songs)