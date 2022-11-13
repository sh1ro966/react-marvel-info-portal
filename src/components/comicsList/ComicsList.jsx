import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

import AppBanner from "../appBanner/AppBanner";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import FindComics from '../findComics/FindComics';

import "./comicsList.sass";

const ComicsList = (props) => {
  const [comicsList, setComicsList] = useState([]);
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [offset, setOffset] = useState(1);
  const [term, setTerm] = useState("");
  const [searchComicsList, setSearchComicsList] = useState([]);

  const { loading, error, getAllComicses, onAllItemsLoaded, getFindComics } = useMarvelService();

  useEffect(() => {
    onRequest(offset);
  }, [offset]);

  useEffect(() => {
    onSearchComics(term);
  }, [term]);

  const onRequest = (offset) => {
    getAllComicses(offset).then(onAllComicsLoaded);
  };

  const onRequestNewOffset = () => {
    setLoadingRequest(true);
    setOffset((offset) => offset + 8);
  };

  const onAllComicsLoaded = (newComicsList) => {
    onAllItemsLoaded(setComicsList, comicsList, newComicsList, setLoadingRequest);
  };

  const onSearchComicsLoaded = (searchComicsList) => {
    setSearchComicsList(searchComicsList);
  };

  const onSearchComics = (term) => {
    if (term) {
      getFindComics(term).then(onSearchComicsLoaded);
    } else {
      setSearchComicsList([]);
    }
  };

  const onSearch = (term) => {
    setTerm(term);
  };

  const itemRef = useRef([]);

  const focusOnItem = (id) => {
    itemRef.current.forEach((item) =>
      item.classList.remove("comics__item_active")
    );
    itemRef.current.forEach((item) =>
      item.classList.remove("comics__item_img_active")
    );
    itemRef.current[id].classList.add("comics__item_active");
    itemRef.current[id].classList.add("comics__item_img_active");
    itemRef.current[id].focus();
  };

  function ComicsBlock(arr) {
    const items = arr.map((item, i) => {
      return (
        <li
          tabIndex={0}
          className="comics__item"
          key={i}
          onClick={() => {
            props.onComicsSelected(item.id);
            focusOnItem(i);
          }}
        >
          <Link to={`/comics/${item.id}`}>
          <img
            ref={(el) => (itemRef.current[i] = el)}
            className="comics__item_img"
            src={item.thumbnail}
            alt={item.title}
          />
          <div className="comics__item_name">
            {item.title.length > 40 ? `${item.title.slice(0, 39)}...` : item.title}
          </div>
          <div className="comics__item_price">
            {item.price === 0 ? "NOT AVAILABLE" : `${item.price} $`}
          </div>
          </Link>
        </li>
      );
    });
    return <ul className="comics__container">{items}</ul>;
  }
  const errorMsg = error ? (
    <div className="comics__spinner">
      <ErrorMessage />
    </div>
  ) : null;
  const spinner =
    loading && !loadingRequest ? (
      <div className="comics__spinner">
        <Spinner />
      </div>
    ) : null;
  const displayedContent = () => {
    if (term.length === 0) {
      return ComicsBlock(comicsList);
    } else {
      if (term.length > 1 && searchComicsList.length === 0) {
        return (
          <h2 style={{ position: "absolute", top: 450, left: 470 }}>
            There is no such comic as -{" "}
            <span style={{ color: "#9F0013" }}>'{term.slice(0, 15)}'</span>
          </h2>
        );
      } else if (!loading && !error) {
        return ComicsBlock(searchComicsList);
      }
    }
  };
  const emptyLongBtn = <div className="comics__button"></div>;
  const longBtn = loading || term ? emptyLongBtn : <button className="button button__long" disabled={loadingRequest} onClick={onRequestNewOffset}>LOAD MORE</button>;
  return (
    <>
      <AppBanner />
      <FindComics onSearch={onSearch}/>
      {spinner}
      {errorMsg}
      <div className="comics">
        {displayedContent()}
      </div>
      <div className="comics__button">{longBtn}</div>
    </>
  );
};

export default ComicsList;
