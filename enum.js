const Roles = {
  FRONTEND: 1,
  BACKEND: 2,
  UI: 3,
  FULLSTACK: 4,
};

Object.freeze(Roles);

const Status = {
  INPROGRESS: 1,
  FINISHED: 2,
  DROPPED: 3,
};

Object.freeze(Status);

const Difficulty = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
};

Object.freeze(Difficulty);

module.exports = { Roles, Status, Difficulty };
