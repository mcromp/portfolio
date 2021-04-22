import { ReactNode } from "react";
import "./styles/styles.css";

export const Title = ({ children, styleAdd = "" }: TitleType): JSX.Element => (
 <h1 className={`hero__title ${styleAdd}`}>{children}</h1>
);

type TitleType = {
 children: ReactNode;
 styleAdd?: string;
};
