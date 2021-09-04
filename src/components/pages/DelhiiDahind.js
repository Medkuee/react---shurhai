import React, { useState } from "react";
import { worldWide } from "../../data";
import News from "../News";

function DelhiiDahind() {
  const [datas, setDatas] = useState(worldWide);
  return (
    <div>
      <News datas={datas} name="Дэлхий дахинд" />
    </div>
  );
}

export default DelhiiDahind;
