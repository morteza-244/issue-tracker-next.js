"use client";
import { lineSpinner } from "ldrs";

const Spinner = () => {
  lineSpinner.register();
  return (
    <>
      <l-line-spinner size="20" stroke="1.5" speed="1" color="black" />
      Loading...
    </>
  );
};

export default Spinner;
