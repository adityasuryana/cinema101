const IMAGEBASEURL = 'https://image.tmdb.org/t/p/w500'

const showInfo = (movies) => {
  let HTMLCard = ''
  const container = document.getElementById('container')

  for (let index = 10; index < movies.length; index++) {
    const info = movies[index]

    const year = new Date(info.release_date).getFullYear()

    HTMLCard += `
    <a href="detail/${info.id}" class="card">
        <img src="${IMAGEBASEURL}/${info.poster_path}" class="image_movie" alt="">
        <div class="info">
          <p class="title">${info.title} (${year})</p>
        </div>
    </a>
    `
  }

  container.innerHTML = HTMLCard
}

window.addEventListener('DOMContentLoaded', () => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&primary_release_year=2022&sort_by=popularity.desc`)
    .then((res) => res.json())
    .then((info) => {
        const results = info.results

        showInfo(results)
    })
})
