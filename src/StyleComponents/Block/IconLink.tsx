import { ReactNode } from "react";

export const IconLink = ({ url, children }: ImgProps) => (
 <a href={url} className="block__icon-link" target="_blank" rel="noreferrer">
  {children}
 </a>
);

type ImgProps = {
 url: string;
 children: ReactNode;
};
