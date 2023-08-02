import mongoose from "mongoose";
const { Schema } = mongoose;

const playerSchema = new Schema(
    {
        comment: String,
        get: String,
        parameters: {
          team: String,
          search: String,
          season: String
        },
        errors: [],
        results: Number,
        paging: {
          current: Number,
          total: Number
        },
        response: [
          {
            player: {
              id: Number,
              name: String,
              firstname: String,
              lastname: String,
              age: Number,
              birth: {
                date: String,
                place: String,
                country: String
              },
              nationality: String,
              height: String,
              weight: String,
              injured: Boolean,
              photo: String
            },
            statistics: [
              {
                team: {
                  id: Number,
                  name: String,
                  logo: String
                },
                league: {
                  id: Number,
                  name: String,
                  country: String,
                  logo: String,
                  flag: String,
                  season: Number
                },
                games: {
                  appearences: Number,
                  lineups: Number,
                  minutes: Number,
                  number: Schema.Types.Mixed,
                  position: String,
                  rating: String,
                  captain: Boolean
                },
                substitutes: {
                  in: Number,
                  out: Number,
                  bench: Number
                },
                shots: {
                  total: Schema.Types.Mixed,
                  on: Schema.Types.Mixed
                },
                goals: {
                  total: Number,
                  conceded: Number,
                  assists: Schema.Types.Mixed,
                  saves: Schema.Types.Mixed
                },
                passes: {
                  total: Number,
                  key: Schema.Types.Mixed,
                  accuracy: Number
                },
                tackles: {
                  total: Schema.Types.Mixed,
                  blocks: Schema.Types.Mixed,
                  interceptions: Number
                },
                duels: {
                  total: Number,
                  won: Number
                },
                dribbles: {
                  attempts: Number,
                  success: Schema.Types.Mixed,
                  past: Schema.Types.Mixed
                },
                fouls: {
                  drawn: Number,
                  committed: Schema.Types.Mixed
                },
                cards: {
                  yellow: Number,
                  yellowred: Number,
                  red: Number
                },
                penalty: {
                  won: Schema.Types.Mixed,
                  commited: Schema.Types.Mixed,
                  scored: Number,
                  missed: Number,
                  saved: Schema.Types.Mixed
                }
              }
            ]
          }
        ]
      }

);

const Player = mongoose.models.Player || mongoose.model("Player", playerSchema);

export default Player;