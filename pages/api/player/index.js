export default async function handler(request, response) {
  const rapidApiKey = process.env.RAPID_API_KEY;
  const data = request.body;

  const url = `https://api-football-v1.p.rapidapi.com/v3/players?team=${data.team}&season=${data.season}&search=${data.search}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const resp = await fetch(url, options);
    const result = await resp.json();
    response.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
}
