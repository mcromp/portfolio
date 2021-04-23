import { ReactNode } from "react";

export const Text = ({ children, styleAdd = "" }: TextType): JSX.Element => (
 <p className={`block__text ${styleAdd}`}>{children}</p>
);

type TextType = {
 children: ReactNode;
 styleAdd?: string;
};
