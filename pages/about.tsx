import React from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
const About = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return <>{count}</>;
};

export default About;
