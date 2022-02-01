export function renderString(myString) {
    const li = document.createElement('li');
    li.textContent = myString;
    return li;
}