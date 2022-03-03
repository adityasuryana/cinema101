
const showInfoSeries = (series) => {
  let HTMLCard = ''
  const container = document.getElementById('containerSeries')

  for (let index = 10; index < series.length; index++) {
    const info = series[index]

    const year = new Date(info.release_date).getFullYear()

    HTMLCard += `
    <a href="detail-tv/${info.id}" class="card">
        <img src="${IMAGEBASEURL}/${info.poster_path}" class="image_movie" alt="">
        <div class="info">
          <p class="title">${info.name}</p>
        </div>
    </a>
    `
  }

  container.innerHTML = HTMLCard
}

window.addEventListener('DOMContentLoaded', () => {
  fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&primary_release_year=2022&sort_by=popularity.desc`)
    .then((res) => res.json())
    .then((info) => {
        const results = info.results

        showInfoSeries(results)
    })
})
