import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  useEffect(() => {
    let secondDiv = document.getElementById("topHeader");
    secondDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div className="flex w-full flex-col items-center gap-y-2 h-full justify-center">
      <div className="text-7xl text-poppins font-[900]">404</div>
      <div className="text-2xl">No Page Found</div>
      <Link to="/" className="text-poppins">
        Back to Home Page
      </Link>
    </div>
  );
};

export default Page404;
