import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { navigateState } from "../state/AppAtom";

const Contact = () => {
  const [navigate, setNavigate] = useRecoilState(navigateState);

  useEffect(()=>{
        let secondDiv = document.getElementById("topHeader")
        secondDiv.scrollIntoView({ behavior: "smooth", block: "start" })
    },[])

  useEffect(() => {
    setNavigate("Contact");
  }, []);
  return <div>Contact</div>;
};

export default Contact;
