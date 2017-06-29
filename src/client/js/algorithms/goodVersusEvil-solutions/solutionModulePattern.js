var app = {};

//Added arrays so that if / when then Ents come to battle
app.good = [
  { Name: 'Hobbits', Strength: 1 },
  { Name: 'Men', Strength: 2 },
  { Name: 'Elves', Strength: 3 },
  { Name: 'Dwarves', Strength: 3 },
  { Name: 'Eagles', Strength: 4 },
  { Name: 'Wizards', Strength: 10 }
];

app.evil = [
  { Name: 'Orcs', Strength: 1 },
  { Name: 'Men', Strength: 2 },
  { Name: 'Wargs', Strength: 2 },
  { Name: 'Goblins', Strength: 2 },
  { Name: 'Uruk Hai', Strength: 3 },
  { Name: 'Trolls', Strength: 5 },
  { Name: 'Wizards', Strength: 10 }
];

app.battleResults = [
  { Won: 'Evil', Message: 'Battle Result: Evil eradicates all trace of Good' },
  { Won: 'Good', Message: 'Battle Result: Good triumphs over Evil' },
  { Won: 'Tie', Message: 'Battle Result: No victor on this battle field' }
];

app.getBattleResultMessage = function(s) {
  return this.battleResults[
    this.battleResults
      .map(function(e) {
        return e.Won;
      })
      .indexOf(s)
  ].Message;
};

function goodVsEvil(good, evil) {
  var goodArmy = good.split(' ');
  var evilArmy = evil.split(' ');
  var goodRoll = 0;
  var evilRoll = 0;

  for (var i = 0; i < goodArmy.length; i++) {
    goodRoll += app.good[i].Strength * goodArmy[i];
  }
  for (var i = 0; i < evilArmy.length; i++) {
    evilRoll += app.evil[i].Strength * evilArmy[i];
  }

  if (evilRoll > goodRoll) {
    return app.getBattleResultMessage('Evil');
  } else if (evilRoll < goodRoll) {
    return app.getBattleResultMessage('Good');
  } else {
    return app.getBattleResultMessage('Tie');
  }
}
