class Movie {
  constructor(title, duration) {
    this.title = title;       
    this.duration = duration; 
  }
};
class Series extends Movie {
  constructor(title, duration, episodes) {
    super(title, duration); 
    this.episodes = episodes; 
  }

  getTotalDuration() {
    let total = this.duration * this.episodes; 
    return `${this.title} umumiy davomiyligi: ${total} daqiqa (${this.episodes} qism)`;
  }
}

const series = new Series("Breaking Bad", 47, 62);
console.log(series.getTotalDuration());
