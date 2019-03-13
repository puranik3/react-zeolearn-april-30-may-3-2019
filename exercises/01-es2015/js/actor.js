class Actor {
  constructor(name, born) {
    this.name = name;
    this.born = born;
  }

  print() {
    return `${this.name} (born: ${this.born})`
  }
}

export { Actor };
