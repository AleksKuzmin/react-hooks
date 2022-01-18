import axios from "axios";
import { useEffect, useState } from "react";

const EffectHook = () => {
  const [data, setData] = useState("");
  const [count, SetCount] = useState(0);
  useEffect(() => {
    axios
      .get(
        "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json"
      )
      .then((response) => {
        setData(response.data.product);
        console.log("api called");
      });
  }, []);

  const countClick = () => {
    SetCount(count + 1);
  };

  return (
    <div>
      Hello {data} {count}
      <button onClick={countClick}>Click</button>
    </div>
  );
};

export default EffectHook;
