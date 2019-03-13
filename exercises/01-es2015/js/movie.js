class Movie {
  constructor(title, year, director, actors=[]) {
    this.title = title;
    this.year = year;
    this.director = director;
    this.actors = actors
  }

  print() {
    return `
      <h1>Movies</h1>
      <h2>${this.title} (${this.year})</h2>
      <p><strong>Director:</strong> ${this.director}</p>
      <h3>Starring</h3>
      ${this.printActors()}
    `
  }

  printActors() {
    let actorList = '<ul>'
    for (let actor of this.actors) {
      actorList += `<li>${actor.print()}</li>`
    }
    actorList += '</ul>'
    return actorList
  }
}

export { Movie }
