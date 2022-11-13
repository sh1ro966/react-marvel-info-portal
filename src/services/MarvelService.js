import {useHttp} from '../hooks/http.hook';

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=4161340913469e8982dcbcecee20f153';
    const _baseHeroOffset = 1;
    const _baseComicsOffset = 1;

    const getAllHeroes = async (offset = _baseHeroOffset) => {
      const res = await request(`${_apiBase}/characters?limit=9&offset=${offset}&${_apiKey}`);
      return res.data.results.map(_transformHero);
    }

    const getHero = async (id) => {
      const res = await request(`${_apiBase}/characters/${id}?${_apiKey}`);
      return _transformHero(res.data.results[0]);
    }

    const getFindHero = async (term = 'A') => {
      const res = await request(`${_apiBase}/characters?limit=9&nameStartsWith=${term}&${_apiKey}`)
      return res.data.results.map(_transformHero);
    }

    const getAllComicses = async (offset = _baseComicsOffset) => {
      const res = await request(`${_apiBase}/comics?limit=8&offset=${offset}&${_apiKey}`);
      return res.data.results.map(_transformComics);
    }

    const getComics = async (comicsId) => {
      const res = await request(`${_apiBase}/comics/${comicsId}?${_apiKey}`);
      return _transformComics(res.data.results[0]);
    }

    const getFindComics = async (term) => {
      const res = await request(`${_apiBase}/comics?limit=8&titleStartsWith=${term}&${_apiKey}`)
      return res.data.results.map(_transformComics);
    }

    const onAllItemsLoaded = (setList, itemList, newItemList, setLoadingRequest) => {
      setList([...itemList, ...newItemList]);
      setLoadingRequest(false);
    } 

    const _transformHero = (hero) => {
        return {
            id: hero.id,
            name: hero.name,
            descriptionRandom: hero.description.length < 1 ? "Sorry, we can't find any information about this hero." : hero.description.length > 202 ? `${hero.description.substring(0,200)}...` : hero.description,
            descriptionInfo: hero.description.length < 1 ? "Sorry, we can't find any information about this hero." : hero.description.length > 300 ? `${hero.description.substring(0,298)}...` : hero.description,
            thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
            homepage: hero.urls[0].url,
            wiki: hero.urls[1].url,
            comics: hero.comics.items
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            price: comics.prices[0].price,
            description: comics.description || 'There is no description for this comic',
            thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
            pageNumber: comics.pageCount ? `${comics.pageCount} pages` : 'No information about the number of pages',
            language: comics.textObjects.language || 'en-us'
        }
    }

    return {loading, error, getAllHeroes, getHero, getFindHero, clearError, getAllComicses, getComics, getFindComics, onAllItemsLoaded};
}

export default useMarvelService;


