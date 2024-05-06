import React from "react";
import QuoteCard from "./QuoteCard";

const QuoteGallery = () => {
  return (
    <>
    <div className="">
      <div className="flex flex-wrap justify-center items-start py-6 px-8 lg:px-16 xl:px-24 2xl:px-32 gap-8">
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
        {/* <QuoteCard /> */}
      </div>
    </div>
      
    </>
  );
};

export default QuoteGallery;
