import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const [date, setDate] = useState(0);
  const [weakday, setWeakday] = useState(0);

  useEffect(() => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const weekday = new Date().getDay();
    setWeakday(weekday);
    setDate(`${year}-${month + 1}-${day}`);
  }, []);

  const dayPicker = (weakday) => {
    if (weakday === 1) {
      return "Даваа";
    }
    if (weakday === 2) {
      return "Мягмар";
    }
    if (weakday === 3) {
      return "Лхагва";
    }
    if (weakday === 4) {
      return "Пүрэв";
    }
    if (weakday === 5) {
      return "Баасан";
    }
    if (weakday === 6) {
      return "Бямба";
    }
    if (weakday === 7) {
      return "Ням";
    }
  };

  return (
    <div className="header">
      <div className="header__header">
        <Link to="/" className="header__left">
          <img
            id="logo"
            src="https://shuurhai.mn/storage/assets/logo.png"
            alt=""
          />
        </Link>
        <div className="header__right">
          <div className="header__day">
            <div>{date}</div>
            <div>{dayPicker(weakday)}</div>
          </div>
          <div className="header__weather">
            <div>
              <img
                id="weather"
                src="https://shuurhai.mn/themes/canvas/css/img/weather/5_d.png"
                alt=""
              />
            </div>
            <div>Улаанбаатар 23°C</div>
          </div>
          <div className="header__currency">
            <div className="header__align">
              <img
                id="flag"
                src="https://shuurhai.mn/themes/canvas/css/img/flag/usd.png"
                alt=""
              />
              2848.46₮
            </div>
            <div>АНУ доллар</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
