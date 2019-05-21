// add solution here

function theBeatlesPlay(musicians, instruments) {
  const statements = [];
  for (let i = 0; i < musicians.length; i++) {
    statements.push(`${musicians[i]} plays ${instruments[i]};`);
  }
  return statements;
}