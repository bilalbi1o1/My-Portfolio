import Link from 'next/link';
import { FaGithub,FaInstagram,FaLinkedinIn} from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/bilalbi1o1" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/feed/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/_bila.l_ahmad" },
  // { icon: <FaYoutube />, path: "" },
]

const Socials = ({containerStyles,iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
      </Link>
    }) }
  </div>
}

export default Socials
