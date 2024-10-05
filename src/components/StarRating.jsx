import React, { useEffect, useState } from "react";
import Icons from "./Icons";

const StarRating = ({ rating, color = undefined }) => {
  const [rate, setRate] = useState([]);
  const [unRate, setUnRate] = useState([]);

  useEffect(() => {
    let arr = [],
      arr2 = [];
    for (let i = 1; i <= rating; i++) {
      arr.push(i);
    }
    for (let j = rating + 1; j <= 5; j++) {
      arr2.push(j);
    }
    setUnRate(arr2)
    setRate(arr);
  }, [rating]);
  return (
    <>
        <div className="flex gap-x-[2px]">
            {rate.length ? rate.map((v,i)=> <Icons key={i} string="shine star" />) : <></>}
            {unRate.length ? unRate.map((v,i)=> <Icons key={i} string="white star" color={color || "#FFFFFF"}/>) : <></>}
        </div>
    </>
  );
};

export default StarRating;
