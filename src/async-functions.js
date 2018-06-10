

//the call back function is just returning the value
function giveItBackLater (value, callback) {
  function loadComplete() {
    callback(value)
  }
  setTimeout(loadComplete, 1800)//at 2000 the test will give wrong answer
};


//create a new promise
function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    if (value > 100) {
      reject('WRONG VALUE!')
    }
    resolve(value)
  })
};

 /*
When the code const outputPromise = addSomePromises(somePromise) is executed, your
function should return a
new promise that has both a fulfillment handler and a rejection handler.
When somePromise resolves with a string "foo", the outputPromise should resolve with
a string "foofoo".
When somePromise is rejected with the value "bar", the outputPromise should resolve with "barbarbar".
*/


//src https://www.reddit.com/r/javascript/comments/2x9qxi/js_promises_what_is_the_difference_between_then/
//I have to repeat string, then i put string as a parameter of a function
//catch is an alternative to a reject /error

function addSomePromises(NewPromise) {
  return NewPromise
  .then (function getDoubleString(string) {return string.repeat(2)})
  .catch(function getTripleString(string) {return string.repeat(3)})
};











module.exports= {giveItBackLater,addSomePromises,promiseToGiveItBackLater}
