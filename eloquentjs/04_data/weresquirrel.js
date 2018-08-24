require('./journal');

function phi(table) {
    return (table[1][1] * table[0][0] - table[1][0] * table[0][1]) /
      Math.sqrt((table[1][0] + table[1][1]) *
                (table[0][0] + table[0][1]) *
                (table[0][1] + table[1][1]) *
                (table[0][0] + table[1][0]));
}

function tableFor(event, journal) {
    let table = [
        [0, 0],
        [0, 0]
    ];
    for (let i = 0; i < journal.length; i++) {
      let entry = journal[i], col = 0, row = 0;
      if (entry.events.includes(event)) col++;
      if (entry.squirrel) row++;
      table[row][col] += 1;
    }
    return table;
}

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
      for (let event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    return events;
}

console.log(phi([[76, 9], [4, 1]]));
console.log(tableFor("pizza", JOURNAL));
 
for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(event + ":", correlation);
    }
}

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
       !entry.events.includes("brushed teeth")) {
      entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));