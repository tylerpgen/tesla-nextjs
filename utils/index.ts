export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "718e4fd432msh5a2055e33fe1881p1d9ed9jsn0b65b46816b6",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", { headers: headers });

  const result = await response.json();

  return result;
}
