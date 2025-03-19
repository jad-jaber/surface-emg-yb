import { Url } from "next/dist/shared/lib/router/router";
import { title } from "process";

interface ContentRowProps {
    title: string // Text for section title
    img: string; // URL for the image
    text: string; // Text to display
    index: number; // Index of the container (to alternate img and text order on desktop)
}


const ImgContentRow: React.FC<ContentRowProps> = ({ title, img, text, index }) => {
    return (
        <div
            className={`flex p-[24px] flex-col md:flex-row items-center justify-around w-full space-y-4 md:space-y-0 md:space-x-4 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            {/* Text content */}
            <div className="flex flex-col justify-center w-full max-w-xl space-y-2">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-500 text-left">{text}</p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/3">
                <img src={img} alt={text} className="w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default ImgContentRow;