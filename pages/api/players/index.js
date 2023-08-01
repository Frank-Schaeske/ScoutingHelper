import dbConnect from "../../../components/db/connect";
import Player from "../../../components/db/models/Player";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const players = await Player.find();
    return response.status(200).json(players);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }

}
