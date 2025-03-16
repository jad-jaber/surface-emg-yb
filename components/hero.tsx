import { title, subtitle } from "@/components/primitives";


export default function Hero() {
  return (
    <section className="relative flex flex-col items-left justify-center gap-4 py-8 md:px-8 md:py-10 h-1/2 md:h-full w-full overflow-hidden">
        <video src="/best-use-mr-emg-no-audio.mp4"
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        />
        {/* Video Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        <div className="relative z-10 inline-block max-w-xl text-left justify-center text-white">
            <span className={title()}>TAKE CONTROL OF&nbsp;</span>
            <span className={title({ color: "blue" })}>YOUR BODY</span>
            <span className={title()}>.</span>
            <br />
            <div className={subtitle({ class: "mt-4" })}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore minima officiis, nam est id.
            </div>
        </div>
    </section>
  );
}