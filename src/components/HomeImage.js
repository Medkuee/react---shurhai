import React from "react";
import "./HomeImage.css";

function HomeImage({ image, title, header, writer, date, style }) {
  return (
    <div className={style === "med" ? "home__first" : "home__first__sm"}>
      <img
        className={style === "small" ? "home__image" : "home__image__sm"}
        src={image}
        style={{ height: `${style === "home__med" ? "110%" : ""}` }}
        alt=""
      />
      <div className="home__imageContent">
        <span className="home__title">{title}</span>
        <div className="home__header">{header}</div>
        <span>
          <span>{writer}</span>
          <span>{date}</span>
        </span>
      </div>
    </div>
  );
}

export default HomeImage;
