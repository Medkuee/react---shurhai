import React, { useState } from "react";
import { entertainment } from "../../data";
import News from "../News";

function Entertainment() {
  const [datas, setDatas] = useState(entertainment);
  return (
    <div>
      <News datas={datas} name="Entertainment" />
    </div>
  );
}

export default Entertainment;
