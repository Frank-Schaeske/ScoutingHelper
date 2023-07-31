export const initialPlayers = [
  {
    comment: "From Bremen...",
    get: "players",
    parameters: { team: "162", search: "fullkrug", season: "2022" },
    errors: [],
    results: 1,
    paging: { current: 1, total: 1 },
    response: [
      {
        player: {
          id: 25391,
          name: "Niclas Füllkrug",
          firstname: "Niclas",
          lastname: "Füllkrug",
        },
        statistics: [
          {
            team: {
              id: 162,
              name: "Werder Bremen",
              logo: "https://media-2.api-sports.io/football/teams/162.png",
            },
            goals: { total: 16 },
          },
        ],
      },
    ],
  },
  {
    comment: "Good free kick shooter",
    get: "players",
    parameters: { team: "160", search: "grifo", season: "2022" },
    errors: [],
    results: 1,
    paging: { current: 1, total: 1 },
    response: [
      {
        player: {
          id: 26248,
          name: "Vincenzo Grifo",
          firstname: "Vincenzo",
          lastname: "Grifo",
        },
        statistics: [
          {
            team: {
              id: 160,
              name: "SC Freiburg",
              logo: "https://media-1.api-sports.io/football/teams/160.png",
            },
            goals: { total: 15 },
          },
        ],
      },
    ],
  },
  {
    comment: "From Munich...",
    get: "players",
    parameters: { team: "157", search: "gnabry", season: "2022" },
    errors: [],
    results: 1,
    paging: { current: 1, total: 1 },
    response: [
      {
        player: {
          id: 510,
          name: "Serge Gnabry",
          firstname: "Serge David",
          lastname: "Gnabry",
        },
        statistics: [
          {
            team: {
              id: 157,
              name: "Bayern Munich",
              logo: "https://media-2.api-sports.io/football/teams/157.png",
            },
            goals: { total: 14 },
          },
        ],
      },
    ],
  },
];
