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