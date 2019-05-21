// add solution here

function theBeatlesPlay(musicians, instruments) {
  const statements = [];
  for (let i = 0; i < musicians.length; i++) {
    statements.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return statements;
}

/*Create a function `johnLennonFacts`. This function will accept one argument, an
array of facts about John Lennon (note that it might not be exactly the
following facts):

```js
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
```

Use a while loop to loop over the facts array and add `"!!!"` to the end of
every fact. The function should return an array of strings with exclamation
points.*/

function johnLennonFacts(factsArr) {
  let counter = 0;
  while (counter < factsArr.length) {
    factsArr[counter] = factsArr[counter] + "!!!";
    counter++;
  }
}

/* + Create a function `iLoveTheBeatles` which accepts a number as a parameter. The
body of the function should create a variable that stores an empty array. Then,
implement a do-while loop inside the function that adds `"I love the Beatles!"`
to the empty array. Then the loop should increment the number passed in as a
parameter. The condition of the loop should check to see that the parameter
number is less than `15`. The function should return the array with the strings
`"I love the Beatles!"`. */

function iLoveTheBeatles(number) {
  const love = [];
  do {
    
  } while ()
}