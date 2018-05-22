const movie = {
    title: 'Shrek 4',
    Duration: '1H 30M',
    Category: 'Animation, Comdedy',
    Rating: 4
};

let stars = ''
for(let a = 0; a< movie.Rating-1; a++){
    stars += '*'
}

console.log(stars);