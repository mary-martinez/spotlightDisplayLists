export function renderString(myString) {
    const li = document.createElement('li');
    li.textContent = myString;
    return li;
}

export function renderShoe(shoe) {
    // template:
    // <div class="shoeObjects">
    //         <h2>High heels</h2>
    //         <h3>Style level: 10</h3>
    //         <p>Worn for beauty.</p>
    //  </div>
    const div = document.createElement('div');
    div.classList.add('shoeObjects');

    const h2 = document.createElement('h2');
    h2.textContent = shoe.type;

    const h3 = document.createElement('h3');
    h3.textContent = `Style level: ${shoe.styleLevel}`;

    const p = document.createElement('p');
    p.textContent = `Worn for ${shoe.strength}.`;

    div.append(h2, h3, p);
    return div;
}

export function renderToy(toy) {
    const div = document.createElement('div');
    div.classList.add('toy');

    const h2 = document.createElement('h2');
    h2.textContent = toy.name;

    const colorsArray = toy.colors;
    let tempColors = '';
    for (let i = 0; i < colorsArray.length; i++) {
        if (i === 0) {
            tempColors = `${colorsArray[i]}`;
        } else if (i === (colorsArray.length - 1)) {
            tempColors = `${tempColors}, and ${colorsArray[i]}`;
        } else {
            tempColors = `${tempColors}, ${colorsArray[i]}`;
        }
    }
    const p = document.createElement('p');
    p.textContent = `${toy.name} is a ${tempColors} ${toy.type}.`
    div.append(h2, p);
    return div;
}