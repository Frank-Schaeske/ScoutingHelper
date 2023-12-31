import dbConnect from "../../../../components/db/connect";
import Player from "../../../../components/db/models/Player";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const player = await Player.findById(id);

    if (!player) {
      return response.status(404).json({ status: "Not found" });
    }

    response.status(200).json(player);
  }

  if (request.method === "PUT") {
    await Player.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ status: "Player successfully updated." });
    return;
  }

  if (request.method === "DELETE") {
    await Player.findByIdAndDelete(id);

    response.status(200).json({ status: "Player successfully deleted." });
    return;
  }
}
