// IMPORT MODULES under test here:
import { renderString, renderShoe } from '../utils.js';

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