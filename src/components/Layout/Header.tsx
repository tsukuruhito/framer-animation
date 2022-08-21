import Image from "next/image";
import { useAtom } from "jotai";
import { sceneAtom } from "../../atom";
import { useRouter } from "next/router";
import { useMemo } from "react";

type PropsType = {
  isShow: boolean;
};
const Header = (props: PropsType) => {
  const { isShow } = props;
  const [, setScene] = useAtom(sceneAtom);
  const router = useRouter();
  const handeSceneChange = (pass: string) => {
    if (router.pathname !== pass) {
      router.push(pass).then(() => {
        setScene(true);
      });
    }
  };

  return (
    <header
      className={`fixed z-30 w-full box-border flex justify-between items-center font-mono py-2 uppercase flex-col md:flex-row bg-secondary drop-shadow-md transition-all ease-in-out duration-500 
        ${isShow ? "opaciry-1" : "opacity-0"}`}
    >
      <h1 className="flex items-center" onClick={() => handeSceneChange("/")}>
        <Image
          src="/fav.png"
          alt="logo"
          width={100}
          height={50}
          objectFit="contain"
          objectPosition="center"
        />
        <span className="text-2xl font-bold tracking-tight text-white">
          ts port
        </span>
      </h1>
      <nav>
        <ul>
          <li
            onClick={() => handeSceneChange("/mini")}
            className="text-white px-4 py-2 mx-2 box-border relative 
              hover:before:w-full hover:before:h-px hover:before:absolute hover:before:bg-white hover:before:bottom-0 hover:before:left-0
              before:w-0 before:h-px :before:absolute before:bg-white before:bottom-0before:left-0 before:transition-all before:ease-in-out before:duration-200
            "
          >
            mini animation
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
