import { StaticImageData } from "next/image"

import  Dribble  from "../../public/icons/dribbble.png"; 
import  Instagram  from "../../public/icons/instagram.png"; 
import  Linkedin  from "../../public/icons/linkedin.png"; 

type SocialMediaProps = {
  src: StaticImageData;
  alt: string;
}

export const SocialMedia: SocialMediaProps[] = [
  {
    src: Dribble,
    alt: "dribble"
  },
  {
    src: Instagram,
    alt: "instagram"
  },
  {
    src: Linkedin,
    alt: "linkedin"
  }
]