INSERT INTO players
  (id, name)
VALUES
  (1, 'Dylan');
INSERT INTO players
  (id, name)
VALUES
  (2, 'Mickias');
INSERT INTO players
  (id, name)
VALUES
  (3, 'Rob');
INSERT INTO players
  (id, name)
VALUES
  (4, 'Yiqi');

INSERT INTO games
  (id)
VALUES
  (1);
INSERT INTO games
  (id)
VALUES
  (2);
INSERT INTO games
  (id)
VALUES
  (3);

INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (1, 1, 6, 1);
INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (2, 2, 10, 1);
INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (3, 3, 6, 1);
INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (4, 4, 8, 1);

INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (5, 1, 3, 2);
INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (6, 2, 4, 2);
INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (7, 3, 6, 2);
INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (8, 4, 10, 2);

INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (9, 1, 10, 3);
INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (10, 2, 6, 3);
INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (11, 3, 4, 3);
INSERT INTO game_details
  (id, player_id, score, game_id)
VALUES
  (12, 4, 5, 3);