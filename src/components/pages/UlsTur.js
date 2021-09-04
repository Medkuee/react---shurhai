import React, { useState } from "react";
import { politics } from "../../data";
import News from "../News";

function UlsTur() {
  const [datas, setDatas] = useState(politics);
  return (
    <div>
      <News datas={datas} name="Улс төр" />
    </div>
  );
}

export default UlsTur;
