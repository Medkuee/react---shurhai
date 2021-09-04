import React, { useState } from "react";
import { parliament } from "../../data";
import News from "../News";

function Manai76() {
  const [datas, setDatas] = useState(parliament);
  return (
    <div>
      <News datas={datas} name="Манай 76" />
    </div>
  );
}

export default Manai76;
