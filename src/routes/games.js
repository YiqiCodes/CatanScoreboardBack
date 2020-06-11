const router = require("express").Router();

module.exports = (db) => {
  router.get("/games", (request, response) => {
    db.query(
      `
    SELECT game_details.score, game_details.game_id, players.name
    FROM game_details
    INNER JOIN players ON game_details.player_id = players.id 
    INNER JOIN games on games.id = game_details.game_id
  `
    ).then(({ rows: games }) => {
      const groupedGames = games.reduce((acc, game) => {
        if (acc[game.game_id]) {
          acc[game.game_id].push(game);
        } else {
          acc[game.game_id] = [game];
        }
        return acc;
      }, {});
      response.json(groupedGames);
    });
  });

  router.post("/games", (request, response) => {
    const score = Object.values(request.body);
    console.log("score", score);
    db.query(
      `
      INSERT INTO games DEFAULT VALUES
      RETURNING id;
    `
    ).then((res) => {
      db.query(
        `
        INSERT INTO game_details
        (id, player_id, score, game_id)
        VALUES
        (DEFAULT, 1, ${score[0]}, ${res.rows[0].id}),
        (DEFAULT, 2, ${score[1]}, ${res.rows[0].id}),
        (DEFAULT, 3, ${score[2]}, ${res.rows[0].id}),
        (DEFAULT, 4, ${score[3]}, ${res.rows[0].id})
      `
      );
    });
  });

  router.get("/games/total", (request, response) => {
    db.query(
      `
    SELECT game_details.score, players.name, game_details.game_id
    FROM game_details
    JOIN players ON game_details.player_id = players.id
  `
    ).then(({ rows: games }) => {
      const gamesPointsWins = [];
      games.forEach((item) => {
        const indexOfPlayer = gamesPointsWins.findIndex(
          (player) => player.name === item.name
        );
        if (indexOfPlayer === -1) {
          // Add player if they haven't been added yet
          if (item.score === 10) {
            gamesPointsWins.push({
              name: item.name,
              score: item.score,
              wins: 1,
            });
          } else {
            gamesPointsWins.push({
              name: item.name,
              score: item.score,
              wins: 0,
            });
          }
        } else {
          // Update player if they've previously been added
          gamesPointsWins[indexOfPlayer].score += item.score;
          if (item.score === 10) {
            gamesPointsWins[indexOfPlayer].wins++;
          }
        }
      });
      response.json(gamesPointsWins);
    });
  });

  router.delete("/games", (request, response) => {
    db.query(
      `
    DELETE FROM game_details WHERE game_details.game_id = ${request.body.identification};
    DELETE FROM games WHERE games.id = ${request.body.identification};`
    ).then((res) => {
      response.json(res);
    });
  });

  router.get("/games/test", (request, response) => {
    db.query(
      `
    SELECT * FROM games    
  `
    ).then(({ rows: games }) => {
      response.json(games);
    });
  });
  return router;
};
