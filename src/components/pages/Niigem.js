import React, { useState } from "react";
import { society } from "../../data";
import News from "../News";

function Niigem() {
  const [datas, setDatas] = useState(society);
  return (
    <div>
      <News datas={datas} name="Нийгэм" />
    </div>
  );
}

export default Niigem;
