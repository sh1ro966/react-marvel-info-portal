import { useState, useEffect, useRef } from "react";

import AppBanner from "../appBanner/AppBanner";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./comicsList.sass";

const ComicsList = (props) => {
  const [comicsList, setComicsList] = useState([]);
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [offset, setOffset] = useState(200);

  const { loading, error, getAllComicses, onAllItemsLoaded } =
    useMarvelService();

  useEffect(() => {
    onRequest(offset);
  }, [offset]);

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
          key={item.id}
          onClick={() => {
            props.onComicsSelected(item.id);
            focusOnItem(i);
          }}
        >
          <img
            ref={(el) => (itemRef.current[i] = el)}
            className="comics__item_img"
            src={item.thumbnail}
            alt={item.title}
          />
          <div className="comics__item_name">
            {item.title.length > 40
              ? `${item.title.slice(0, 39)}...`
              : item.title}
          </div>
          <div className="comics__item_price">
            {item.price === 0 ? "NOT AVAILABLE" : `${item.price} $`}
          </div>
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
  const displayedContent = loading && errorMsg ? null : ComicsBlock(comicsList);
  const longBtn = (
    <button
      className="button button__long"
      disabled={loadingRequest}
      onClick={onRequestNewOffset}
    >
      LOAD MORE
    </button>
  );
  const emptyLongBtn = <div className="comics__button"></div>;
  return (
    <>
      <AppBanner />
      {spinner}
      {errorMsg}
      <div className="comics">
        {displayedContent}
      </div>
      <div className="comics__button">{!loading ? longBtn : emptyLongBtn}</div>
    </>
  );
};

export default ComicsList;
