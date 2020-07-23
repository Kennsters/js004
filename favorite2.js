let favoriteGames = ['Zelda', 'League of Legends', 'Bloodborne', 'Monster Hunter', 'Crash Bandicoot', 'Pokemon', 'Maplestory', 'God of War', 'Super Smash', 'Warframe']

let movies = ['Toy Story 4', 'Crazy Rich Asians', 'Braveheart', 'Joker', 'La La Land', 'Wolf of Wallstreet', 'Peanut Butter Falcon', 'Good Boys', 'Space Jam', 'Remember The Titans']

let songs = [`Hotel California`, `California Love`, `California Dreaming`, `California Girls`, `California Sun`, `California Kids`, `California Waiting`, `Going Back To Cali`, `California Nights`, `California Soul`]

let food = ['burger', 'pizza', 'pasta', 'eggs', 'bacon', 'cereal', 'noodles', 'cake', 'cheese', 'crackers’']

let sports = ['football', 'baseball', 'basketball', 'soccer', 'gymnastics', 'hockey', 'volleyball', 'tennis', 'swimming', 'running']

for (let i = 0; i < movies.length; i++) {
    console.log(movies[1])
    let movieElem = document.createElement('li')
    movieElem.className = 'list-group-item'
    movieElem.textContent = movies[i]
    document.getElementById('movies').append(movieElem)
}