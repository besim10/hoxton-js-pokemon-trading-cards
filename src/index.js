// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

// console.log(data);
// console.log("Hello!")

{/* <li class="card">
    <h2 class="card--title">Bulbasaur</h2>
    <img
      width="256"
      class="card--img"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    />
    <ul class="card--text">
      <li>HP: 45</li>
      <li>ATTACK: 49</li>
      <li>DEFENSE: 49</li>
      <li>SPECIAL-ATTACK: 65</li>
      <li>SPECIAL-DEFENSE: 65</li>
      <li>SPEED: 45</li>
    </ul>
</li>
   */}
function createCard(title, image){
    const listEl = document.createElement('li')
    listEl.setAttribute('class','card')
    const ulEl = document.querySelector('.cards')
    ulEl.append(listEl)

    const cardTitle = document.createElement('h2')
    cardTitle.setAttribute('class','card--title')
    cardTitle.textContent = title
    

    const imgEl = document.createElement('img')
    imgEl.setAttribute('class','card--img')
    imgEl.setAttribute('src', image)
    imgEl.setAttribute('width','256')

    const anotherUl = document.createElement('ul')
    anotherUl.setAttribute('class','card--text')

    listEl.append(cardTitle,imgEl,anotherUl)

    function createLi(text){
        const listItem = document.createElement('li')
        listItem.textContent = text
        anotherUl.append(listItem)
    }
    createLi('HP: 45')
    createLi('ATTACK: 49')
    createLi('DEFENSE: 49')
    createLi('SPECIAL-ATTACK: 65')
    createLi('SPECIAL-DEFENSE: 65')
    createLi('SPEED: 45')
    
}
createCard('Bulbasaur',data[0].sprites.other['official-artwork'].front_default)

createCard('Ivysaur',data[1].sprites.other['official-artwork'].front_default)

createCard('Venusaur',data[2].sprites.other['official-artwork'].front_default)

createCard('Charmander',data[3].sprites.other['official-artwork'].front_default)

createCard('Charmeleon',data[4].sprites.other['official-artwork'].front_default)

createCard('Charizard',data[5].sprites.other['official-artwork'].front_default)

createCard('Squirtle',data[6].sprites.other['official-artwork'].front_default)
