import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { FaDownload, FaHeart, FaShare } from "react-icons/fa";

const QuoteCard = () => {
  return (
    <>
      <div className="w-auto h-auto ">
        <Card isFooterBlurred radius="lg" className=" sm:w-80">
          <Image
            alt="background"
            className="object-fill"
            height={600}
            src="./gradientBg.jpeg"
            width={400}
          />
          <div className="absolute flex quote-text w-full h-full align-center justify-center align-middle">
            <p className=" align-start justify-center align-center absolute z-50 highlight w-full py-8 px-8 text-center text-white">
              "The greatest glory in living lies not in never falling, but in
              rising every time we fall." - Nelson Mandela
            </p>
          </div>

          <CardFooter className="flex border-1 mx-1 overflow-hidden py-1 px-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small ml-0 z-10">
            <div className="w-full flex justify-between items-center">
              <Button
                isIconOnly
                className="text-tiny text-white bg-black/20 w-8 h-8"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <FaShare size={18} />
              </Button>
              <Button
                isIconOnly
                className="text-tiny text-white bg-black/20 w-8 h-8"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <FaDownload size={18} />
              </Button>
              <Button
                isIconOnly
                className="text-tiny text-white bg-black/20 w-8 h-8"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <FaHeart size={18} />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default QuoteCard;
