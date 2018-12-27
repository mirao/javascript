/**
 * Alternative to test.js using https://mochajs.org
 */

const assert = require('assert');

it('Convert Latin text to uppercase', function () {
    assert.equal("hello".toUpperCase(), "HELLO");
});
it('Convert Greek text to uppercase', function () {
    assert.equal("Χαίρετε".toUpperCase(), "ΧΑΊΡΕΤΕ");
});
it('Don\'t convert case-less characters', function () {
    assert.equal("مرحبا".toUpperCase(), "مرحبا");
});
it('Convert Czech text to uppercase', function () {
    assert.equal("Žluťoučký kůň".toUpperCase(), "ZLUŤOUČKÝ KŮŇ");
});
