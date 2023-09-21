import React from "react";
import { TestingApi } from "../services/__testing__";

const Testing = async () => {
  try {
    const result = await TestingApi();
    console.log(result.data.slider.sliders);
  } catch (error) {
    console.log(error);
  }
  return <div>Testing...</div>;
};

export default Testing;
