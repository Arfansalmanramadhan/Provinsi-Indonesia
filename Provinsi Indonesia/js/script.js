const provinsi = "API/regions.json";
const cities = [];
fetch(provinsi)
  .then((gumpal) => gumpal.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const reges = new RegExp(wordToMatch, "gi");
    return place.name.match(reges) || place.longitude.match(reges);
    console.log(place);
  });
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMaatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const reges = new RegExp(this.value, "gi");
      const namaProvinsi = place.name.replace(reges, `<spa>${this.value}</spa>`);
      const nama = place.longitude.replace(reges, `<spa>${this.value}</spa>`);
      return `
            <li>
                <span>${namaProvinsi}, ${nama}</span>
            </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}
const masuk = document.querySelector(".cari");
const suggestions = document.querySelector(".suggestion");

masuk.addEventListener("change", displayMaatches);
masuk.addEventListener("keyup", displayMaatches);
