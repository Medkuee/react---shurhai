import React from "react";
import { Link } from "react-router-dom";
import "./HeaderPages.css";
import SearchIcon from "@material-ui/icons/Search";

function HeaderPages() {
  return (
    <div className="headerPages">
      <div className="headerPages__container">
        <ul className="headerPages__left__unordered">
          <Link className="headerPages__left__list" to="/">
            <li>Эхлэл</li>
          </Link>
          <Link className="headerPages__left__list" to="/ulsTur">
            <li>улс төр</li>
          </Link>
          <Link className="headerPages__left__list" to="/ediinZasag">
            <li>эдийн засаг</li>
          </Link>
          <Link className="headerPages__left__list" to="/niigem">
            <li>нийгэм</li>
          </Link>
          <Link className="headerPages__left__list" to="/uulUurhai">
            <li>уул уурхай</li>
          </Link>
          <Link className="headerPages__left__list" to="/entertainment">
            <li>entertainment</li>
          </Link>
          <Link className="headerPages__left__list" to="/delhiiDahind">
            <li>дэлхий дахинд</li>
          </Link>
          <Link className="headerPages__left__list" to="/manai76">
            <li>манай 76</li>
          </Link>
        </ul>

        <span className="headerPages__right__items">
          <SearchIcon id="icon" />
          <input
            className="headerPages__input"
            type="text"
            placeholder="Хайх үгээ энд бичнэ үү"
          />
        </span>
      </div>
    </div>
  );
}

export default HeaderPages;
