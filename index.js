// add solution here

function theBeatlesPlay(musicians, instruments) {
  const statements = [];
  musicians.forEach(function (item, index) {
    statements.push(`${musicians[index]} plays ${instruments[index]}`);
  });
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
    factsArr[counter] += "!!!";
    counter++;
  }
  print (factsArr);
}