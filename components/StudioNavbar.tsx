import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <>
        <div className="flex items-center justify-between p-5">
          <Link className="text-black flex items-center" href="/">
            <ArrowUturnLeftIcon className="h-6 w-6 text-black mr-2" />
            Volver al sitio
          </Link>
        </div>
        {props.renderDefault(props)}
      </>
    </div>
  );
};

export default StudioNavbar;
