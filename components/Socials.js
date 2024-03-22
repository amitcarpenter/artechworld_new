// next Links
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiLinkedinBoxLine,
  RiLinkedinLine,
  RiInstagramLine,
  // RiFacebookLine,
  RiFacebookLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-20">
        <RiYoutubeLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-20">
        <RiLinkedinLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-20">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-20">
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
