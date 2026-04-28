import { title } from "framer-motion/client";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center gap-4 py-4 px-2 bg-gray-300 container mx-auto rounded-md">
      <button className="btn bg-[#D72050] text-white border-none text-xl">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100} className="text-black">
        {news.map((n) => {
          return <span key={n._id}>{n.title}</span>;
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
