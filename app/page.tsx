"use client";
import { useRef } from "react";
import Hero from "@/components/hero";
import ImgContentRow from "@/components/imgContentRow";
import WhatWeDo from "@/components/whatWeDo";
import { useIsVisible } from "@/components/useIsVisible";

export default function Home() {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef(null);
  const isVisible3 = useIsVisible(ref3);

  const imageRowContent = [
    {
      index: 1,
      title: "TITLE ONE",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium iusto inventore quibusdam, laboriosam laborum deleniti asperiores blanditiis! Consequatur aperiam ut aspernatur dicta quos culpa praesentium omnis incidunt odit fugiat.",
      img: "https://placehold.co/500x500"
    },
    {
      index: 2,
      title: "TITLE TWO",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium iusto inventore quibusdam, laboriosam laborum deleniti asperiores blanditiis! Consequatur aperiam ut aspernatur dicta quos culpa praesentium omnis incidunt odit fugiat.",
      img: "https://placehold.co/500x500"
    },
    {
      index: 3,
      title: "TITLE THREE",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium iusto inventore quibusdam, laboriosam laborum deleniti asperiores blanditiis! Consequatur aperiam ut aspernatur dicta quos culpa praesentium omnis incidunt odit fugiat.",
      img: "https://placehold.co/500x500"
    },
  ];

  const renderImageRowComponents = () => {
    return imageRowContent.map((i) => {
      const ref = [ref1, ref2, ref3][i.index - 1];
      const isVisible = [isVisible1, isVisible2, isVisible3][i.index - 1];
      return (
        <ImgContentRow
          ref={ref}
          key={i.index}
          index={i.index}
          title={i.title}
          img={i.img}
          text={i.text}
          isVisible={isVisible} // Pass the visibility prop
        />
      );
    });
  };

  return (
    <>
      <Hero />
      <WhatWeDo />

      <div className="py-[24px]">
        {renderImageRowComponents()}
      </div>
    </>
  );
}
