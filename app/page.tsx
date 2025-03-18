import { title, subtitle } from "@/components/primitives";
import Hero from "@/components/hero";
import ImgContentRow from "@/components/imgContentRow";

export default function Home() {
  return (
    <>
      <Hero/>
      <ImgContentRow index={1} title="TITLE" img="https://placehold.co/500x500" text="Image 1" />
      <ImgContentRow index={2} title="TITLE" img="https://placehold.co/500x500" text="Image 1" />
      <ImgContentRow index={3} title="TITLE" img="https://placehold.co/500x500" text="Image 1" />
    </>
  );
}
