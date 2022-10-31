
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=b5287be9d4b9d636e3f9e2281a71af00';
 getResourse = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
    
        return await res.json();
    }

    getAllHeroes = async () => {
        const res = await this.getResourse(`${this._apiBase}/characters?limit=9&offset=550&${this._apiKey}`);
        return res.data.results.map(this._transformHero)
    }

    getHero = async (id) => {
        const res = await this.getResourse(`${this._apiBase}/characters/${id}?${this._apiKey}`);
        return this._transformHero(res.data.results[0]);
    }

    _transformHero = (hero) => {
        return {
            name: hero.name,
            description: hero.description.length < 1 ? "Sorry, we can't find any information about this hero." : hero.description.length > 202 ? `${hero.description.substring(0,200)}...` : hero.description,
            thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
            homepage: hero.urls[0].url,
            wiki: hero.urls[1].url
        }
    }
}

export default MarvelService;


