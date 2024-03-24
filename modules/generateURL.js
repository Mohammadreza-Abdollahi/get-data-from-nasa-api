class GenerateURL {
  constructor() {
    this.url = "https://api.nasa.gov/planetary/apod";
    this.apiKey = "jUm7KfSDYyFgg9cTccJ7KFHXXlaUvSkgAw6HDfQd";
    this.count = 12;
  }
  getAddress() {
    return `${this.url}?api_key=${this.apiKey}&count=${this.count}`;
  }
}
