const assert = require('assert');
const yourFunction = require('../index'); // Adjust the path based on your project structure

describe('Your Portfolio Website', function() {
  it('should have a home page', function() {
    // Your test logic here
    const result = yourFunction.checkHomePage();
    assert.equal(result, true);
  });

  // Add more tests as needed
});
