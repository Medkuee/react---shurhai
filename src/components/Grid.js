import React from "react";
import "./Grid.css";
import ScheduleIcon from "@material-ui/icons/Schedule";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

function Grid({ image, title, writer, date, comments, text }) {
  return (
    <div className="grid">
      <img className="grid__image" src={image} alt="" />
      <div className="grid__title">{title}</div>
      <div className="grid__info">
        {writer}
        <span className="grid__info__span margin">
          <ScheduleIcon className="grid__icon"></ScheduleIcon>
          {date}
        </span>
        <span className="grid__info__span">
          <QuestionAnswerIcon className="grid__icon"></QuestionAnswerIcon>
          {comments}
        </span>
      </div>
      <span>{text}</span>
    </div>
  );
}

export default Grid;
