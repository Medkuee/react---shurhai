import React, { useState } from "react";
import { mining } from "../../data";
import News from "../News";

function UulUurhai() {
  const [datas, setDatas] = useState(mining);
  return (
    <div>
      <News datas={datas} name="Уул уурхай" />
    </div>
  );
}

export default UulUurhai;
