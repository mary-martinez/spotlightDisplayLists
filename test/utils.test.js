// IMPORT MODULES under test here:
import { renderString, renderShoe, renderToy } from '../utils.js';

const test = QUnit.test;

test('renderString should return an <li> with a string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>Yarn</li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderString('Yarn');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderShoe should return a <div> with shoe info', (expect) => {
    const expected = `<div class="shoeObjects"><h2>High heels</h2><h3>Style level: 10</h3><p>Worn for beauty.</p></div>`;

    const actual = renderShoe({
        type: 'High heels',
        styleLevel: 10,
        strength: 'beauty'
    });
    expect.equal(actual.outerHTML, expected);
});

test('renderToy should return a <div> with a toy description', (expect) => {
    const expected = `<div class="toy"><h2>Broccoli</h2><p>Broccoli is a pink, blue, and purple unicorn.</p></div>`;

    const actual = renderToy({
        name: 'Broccoli',
        type: 'unicorn',
        colors: ['pink', 'blue', 'purple']
    })

    expect.equal(actual.outerHTML, expected);
});