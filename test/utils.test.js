// IMPORT MODULES under test here:
import { renderString } from '../utils.js';

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
