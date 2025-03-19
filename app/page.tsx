import { title, subtitle } from "@/components/primitives";
import Hero from "@/components/hero";
import ImgContentRow from "@/components/imgContentRow";
import WhatWeDo from "@/components/whatWeDo";

export default function Home() {

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
  ]

  const renderImageRowComponents = () => {
    return(
      imageRowContent.map(i => {
        return(
          <ImgContentRow key={i.index} index={i.index} title={i.title} img={i.img} text={i.text} />
        )
      })
    )
  }

  return (
    <>
      <Hero/>
      <WhatWeDo/>

      <div className="py-[24px]">
        {renderImageRowComponents()}
      </div>
    </>
  );
}
