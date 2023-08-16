import React from 'react';

export const mainInitialState = {
  page: "main",
  game: "start",
  players: 2,
  profiles: [],
  legs: [],
  ladder: [],
  cases: {},
  results: [],
};

export const mainReducer = (mainState, action) => {
  switch (action.type) {
    case "INC_PLAYERS":
      return {
        ...mainState,
        players: mainState.players + 1,
      };
    case "DEC_PLAYERS":
      return {
        ...mainState,
        players: mainState.players - 1,
      };
    case "CHANGE_PAGE":
      return {
        ...mainState,
        page: action.page,
      };
    case "READY_GAME":
      return {
        ...mainState,
        game: action.game,
      };
    case "START_GAME":
      return {
        ...mainState,
        game: "ing",
      };
    case "RESET_GAME":
      return {
        ...mainState,
        game: "start",
        profiles: mainState.profiles.map((p) => ({ ...p, result: 0 })),
        cases: {},
      };
    case "NEW_GAME":
      return {
        ...mainState,
        game: "start",
        cases: {},
        profiles: mainState.profiles.map((p) => ({ ...p, result: 0 })),
        page: "main",
      };
    case "GET_PROFILES":
      return {
        ...mainState,
        profiles: action.profiles,
      };
    case "GET_INPUTS":
      return {
        ...mainState,
        cases: {
          ...mainState.cases,
          [action.id]: action.value,
        },
      };
    case "GET_LEGS":
      return {
        ...mainState,
        legs: action.legs,
      };
    case "GET_LADDER":
      return {
        ...mainState,
        ladder: action.ladder,
      };
    case "GET_RESULTS":
      return {
        ...mainState,
        game: "end",
        profiles: mainState.profiles.map((p, i) => {
          return { ...p, result: action.results[i] };
        }),
      };
    // return {
    //   ...mainState,
    //   game: "end",
    //   results: action.results,
    // };
    default:
      throw new Error("ERROR");
  }
};

export const data = [
  {
    id: 1,
    name: "Rabbit",
       src: require("./rabbit.png"),
    
    color: "lightgray",   
    result: 0,
  },
  {
    id: 2,
    name: "Hulk",
    src: require("./superhero.png"),

    color: "Lightpink",
    result: 0,
  },
  {
    id: 3,
    name: "Penguin",
    src: require("./penguin.png"),

    color: "darkslategray",
    result: 0,
  },
  {
    id: 4,
    name: "Camel",
    src: require("./camel.png"),
    color: "lightseagreen",
    result: 0,
  },
  {
    id: 5,
    name: "Dog",
    src: require("./happy.png"),
    color: "sandybrown",
    result: 0,
  },
  {
    id: 6,
    name: "Giraffe",
    src: require("./giraffe.png"),

    color: "burlywood",
    result: 0,
  },
  {
    id: 7,
    name: "Dolphin",
    src: require("./dolphin.png"),

    color: "steelblue",
    result: 0,
  },
  {
    id: 8,
    name: "Horse",
    src: require("./horse.png"),
    color: "maroon",
    result: 0,
  },
  {
    id: 9,
    name: "Fox",
    src : require("./fox.png"),
    color: "tomato",
    result: 0,
  },
  {
    id: 10,
    name: "Elephant",
    src: require("./elephant.png"),
    color: "lightsteelblue",
    result: 0,
  },
];
