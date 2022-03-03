
const showInfoSeries = (series) => {
  let HTMLCard = ''
  const container = document.getElementById('containerDetail')

  for (let index = 10; index < series.length; index++) {
    const info = series[index]

    const year = new Date(info.release_date).getFullYear()

    HTMLCard += `

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
