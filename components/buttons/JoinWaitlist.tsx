"use client";
import React from "react";

const JoinWaitlist = () => {
  const scrollToForm = async () => {
    window.location.hash = "";
    // Set the hash to the ID of the element you want to scroll to (e.g., "#name")
    window.location.hash = "#welcome-to-alphasaas";
  };
  return (
    <button
      onClick={scrollToForm}
      className="bg-white px-4 py-2 text-springleaves rounded-xl font-semibold hover:bg-apple hover:text-white"
    >
      Join the Wait List!
    </button>
  );
};

export default JoinWaitlist;
