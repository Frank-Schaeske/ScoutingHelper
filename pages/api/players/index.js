import { players } from "../../../lib/db";

export default function handler(request, response) {
  return response.status(200).json(players);
}
