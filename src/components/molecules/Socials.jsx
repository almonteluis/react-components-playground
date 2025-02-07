import {
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "@remixicon/react";
export default function Socials() {
  return (
    <div className="flex justify-center gap-4 self-stretch">
      <div className="flex justify-center items-center gap-2 p-2 rounded">
        <a
          aria-label="Link to Sarah Dole Github Profile"
          href="#"
          className="w-5 h-5"
        >
          <RiGithubFill width="20" height="20" className=" text-indigo-700" />
        </a>
      </div>
      <div className="flex justify-center items-center gap-2 p-2 rounded">
        <a
          aria-label="Link to Sarah Dole Linkedin Profile"
          href="#"
          className="w-5 h-5"
        >
          <RiLinkedinFill className=" text-indigo-700" width="20" height="20" />
        </a>
      </div>
      <div className="flex justify-center items-center gap-2 p-2 rounded">
        <a
          aria-label="Link to Sarah Dole Instagram Profile"
          href="#"
          className="w-5 h-5"
        >
          <RiInstagramFill
            className=" text-indigo-700"
            width="20"
            height="20"
          />
        </a>
      </div>
      <div className="flex justify-center items-center gap-2 p-2 rounded">
        <a
          aria-label="Link to Sarah Dole Twitter Profile"
          href="#"
          className="w-5 h-5"
        >
          <RiTwitterXFill className=" text-indigo-700" width="20" height="20" />
        </a>
      </div>
    </div>
  );
}
