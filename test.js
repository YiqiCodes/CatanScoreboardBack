const testData = [
  { score: 6, name: "Dylan", game_id: 1 },
  { score: 10, name: "Mickias", game_id: 1 },
  { score: 6, name: "Rob", game_id: 1 },
  { score: 8, name: "Yiqi", game_id: 1 },
  { score: 3, name: "Dylan", game_id: 2 },
  { score: 4, name: "Mickias", game_id: 2 },
  { score: 6, name: "Rob", game_id: 2 },
  { score: 10, name: "Yiqi", game_id: 2 },
  { score: 10, name: "Dylan", game_id: 3 },
  { score: 6, name: "Mickias", game_id: 3 },
  { score: 4, name: "Rob", game_id: 3 },
  { score: 5, name: "Yiqi", game_id: 3 },
];

let cleanedData = [];

// Desired output:
// [{name: 'kieran', score: 5}, {name: 'nathan', score: 8}, {name: 'yiqi', score: 8}]
testData.forEach((item) => {
  const indexOfPlayer = cleanedData.findIndex(
    (player) => player.name === item.name
  );
  if (indexOfPlayer === -1) {
    // Add player if they haven't been added yet
    if (item.score === 10) {
      cleanedData.push({ name: item.name, score: item.score, wins: +1 });
    } else {
      cleanedData.push({ name: item.name, score: item.score, wins: 0 });
    }
  } else {
    // Update player if they've previously been added
    cleanedData[indexOfPlayer].score += item.score;
    if (item.score === 10) {
      cleanedData[indexOfPlayer].wins++;
    }
  }
});

console.log(cleanedData);

// return (
//   <div>
//     <h3>TOTAL SCORES:</h3>
//     {cleanedData.map(player => (
//       <div>{player.name}: {player.score}</div>
//     ))}
//   </div>
// )
// }
// }
