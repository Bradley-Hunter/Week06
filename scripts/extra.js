const todayDate = new Date();
var dayOfWeek;
dayOfWeek = todayDate.getDay();
var msg;
if (1 <= dayOfWeek <=4)
{
    msg = 'Hang in there!';
}
else
{
    msg = 'Woohoo! It is the weekend!';
}
var msg2;
switch (dayOfWeek){
    case 1:
        msg2 = 'Monday!';
        break;
    case 2:
        msg2 = 'Tuesday!';
        break;
    case 3:
        msg2 = 'Wednesday!';
        break;
    case 4:
        msg2 = 'Thursday!';
        break;
    case 5:
        msg2 = 'Friday!';
        break;
    case 6:
        msg2 = 'Saturday!';
        break;
    case 0:
        msg2 = 'Sunday!';
        break;
    default:
        msg2 = 'Unknown day of the week!';
        break;
}
document.getElementById('message1').innerHTML = msg;
document.getElementById('message2').innerHTML = msg2;

var pokemon;

function output(pokemon){
    pokemon.forEach(element => {
        var article = document.createElement('article');
        var pokeName = document.createElement('h3');
        pokeName.innerHTML = element.name;
        // var location = document.createElement('h4');
        // location.innerHTML = element.location;
        // var dedicated = document.createElement('h4');
        // dedicated.innerHTML = element.dedicated;
        // var imageUrl = document.createElement('img');
        // imageUrl.setAttribute('src', element.imageUrl);
        // imageUrl.setAttribute('alt', element.templeName);
        article.appendChild(pokeName);
        // article.appendChild(location);
        // article.appendChild(dedicated);
        // article.appendChild(imageUrl);
        document.getElementById('pokemon').appendChild(article);

    });
}

async function getPokemon() {
    var response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000');
    if (response.ok)
    {
        pokemon = await response.json();
        pokemon = pokemon.results;
        output(pokemon);
    }
}

getPokemon();

function reset(){
    document.getElementById('pokemon').innerHTML = '';
}

function sortBy(){
    reset();
    var sort = document.getElementById('sortBy').value;
    if (sort == 'pokemonNameAscending')
        pokemon.sort((a, b) => a.name - b.name);
    else if (sort == 'pokemonNameDescending')
        pokemon.sort((a, b) => b.name - a.name);
        pokemon.reverse();
    output(pokemon);
}

document.getElementById('sortBy').addEventListener('change', sortBy);
