const router = require("express").Router();

module.exports = (db) => {
  router.get("/users/:user_id", (request, response) => {
    // console.log("request", request);
    console.log("request2", request.params);
    // console.log("response", response);
    db.query(
      `
      SELECT
        id,
        user_id,
        games,
        gender        
      FROM users
      WHERE user_id = $1::text
    `,
      [request.params.user_id]
    ).then(({ rows: user }) => {
      // console.log("user", user);
      response.json(user);
    });
  });

  return router;
};
