import { ReactNode } from "react";

export const Title = ({ children, styleAdd = "" }: TitleType): JSX.Element => (
 <h1 className={`hero__title ${styleAdd}`}>{children}</h1>
);

type TitleType = {
 children: ReactNode;
 styleAdd?: string;
};
