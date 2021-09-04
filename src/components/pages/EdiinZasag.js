import React, { useState } from "react";
import { economy } from "../../data";
import News from "../News";

function EdiinZasag() {
  const [datas, setDatas] = useState(economy);
  return (
    <div className="ediinZasag">
      <News datas={datas} name="Эдийн засаг" />
    </div>
  );
}

export default EdiinZasag;
