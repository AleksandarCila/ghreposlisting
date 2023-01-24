import { FC } from "react";

import { AiFillGithub } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";

import "./Links.styles.css";

type LinksProps = {
  gitHubUrl: string;
  webUrl: string;
};

export const Links: FC<LinksProps> = ({ gitHubUrl, webUrl }) => {
  return (
    <div className="links">
      <a href={gitHubUrl}>
        <AiFillGithub />
      </a>
      {webUrl && <a href={webUrl}>
        <RiExternalLinkLine />
      </a>}
    </div>
  );
};
