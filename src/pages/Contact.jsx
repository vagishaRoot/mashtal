import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { navigateState } from "../state/AppAtom";

const Contact = () => {
  const [navigate, setNavigate] = useRecoilState(navigateState);

  useEffect(() => {
    setNavigate("Contact");
  }, []);
  return <div>Contact</div>;
};

export default Contact;
