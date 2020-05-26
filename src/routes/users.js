const router = require("express").Router();

module.exports = (db) => {
  router.get("/users/:user_id", (request, response) => {
    db.query(
      `
      SELECT
        id,
        user_id,
        newgames,
        games,
        gender        
      FROM users
      WHERE user_id = $1::text
    `,
      [request.params.user_id]
    ).then(({ rows: user }) => {
      response.json(user);
    });
  });

  router.put("/users/update", (request, response) => {
    db.query(
      `
    SELECT newgames
    FROM users
    WHERE user_id = 'adam'
    `
    ).then((results) => {
      const newGames = results.rows[0].newgames;

      const oldGames = newGames.reduce(
        (acc, array, index) =>
          index === newGames.length - 1
            ? `${acc},[${array}]`
            : `${acc}${index === 0 ? "" : ","}[${array}]`,
        ""
      );

      db.query(
        `
      UPDATE users
      SET newgames = ARRAY[${oldGames}] || ARRAY[${request.body.scores}]
      WHERE id = $1::integer
      `,
        [1]
      ).catch((error) => console.log(error));
    });
  });

  return router;
};
