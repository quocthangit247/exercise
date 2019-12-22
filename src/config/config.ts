class Config {
  public readonly apiService: { api: string };

  constructor() {
    this.apiService = {
      api: 'https://5dfefb6f03f98e0014e92a61.mockapi.io',
    };
  }
}

export default new Config();
