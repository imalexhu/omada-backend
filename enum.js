const Tags = {
  ALL: 0,
  FRONTEND: 1,
  BACKEND: 2,
  UI: 3,
  FULLSTACK: 4,
};

Object.freeze(Tags);

const Status = {
  INPROGRESS: 1,
  FINISHED: 2,
  DROPPED: 3,
};

Object.freeze(Status);

const Difficulty = {
  ALL: 0,
  EASY: 1,
  MEDIUM: 2,
  HARD: 3,
};

Object.freeze(Difficulty);

export { Tags, Status, Difficulty };
