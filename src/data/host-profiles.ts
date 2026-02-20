import type { StaticImageData } from "next/image";

import HostImage1 from "../../public/assets/images/host-profile-1.jpg";
import HostImage2 from "../../public/assets/images/host-profile-2.jpg";
import HostImage3 from "../../public/assets/images/host-profile-3.jpg";
import HostImage4 from "../../public/assets/images/host-profile-4.jpg";
import HostImage5 from "../../public/assets/images/host-profile-5.jpg";
import HostImage6 from "../../public/assets/images/host-profile-6.jpg";

interface HostProfile {
  id: number;
  image: StaticImageData;
  name: string;
  role: string;
}

const HostProfileData: HostProfile[] = [
  {
    id: 1,
    image: HostImage1,
    name: "Ethan Anderson",
    role: "Podcast Producer",
  },
  {
    id: 2,
    image: HostImage2,
    name: "Sophia Reynolds",
    role: "Singer",
  },
  {
    id: 3,
    image: HostImage3,
    name: "Benjamin Foster",
    role: "Scriptwriter",
  },
  {
    id: 4,
    image: HostImage4,
    name: "Olivia Martinez",
    role: "Audio Engineer",
  },

  {
    id: 5,
    image: HostImage5,
    name: "Mason Chen",
    role: "Audio Engineer",
  },
  {
    id: 6,
    image: HostImage6,
    name: "Isabella Thompson",
    role: "Podcast Producer",
  },
];
