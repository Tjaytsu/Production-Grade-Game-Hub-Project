import { type IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import type { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // Map platform slug strings to react-icons components
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="d-flex flex-wrap align-items-center gap-2 my-2">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];

        // Only render if a matching icon exists in the map
        if (!IconComponent) return null;

        return (
          <span
            key={platform.id}
            className="text-secondary fs-5"
            title={platform.name} // Tooltip on hover
          >
            <IconComponent />
          </span>
        );
      })}
    </div>
  );
};

export default PlatformIconList;
