import { ReactNode } from "react";
import "./styles/styles.css";

export const Title = ({ children, styleAdd = "" }: TitleType): JSX.Element => (
 <h2 className={`section__title ${styleAdd}`}>{children}</h2>
);

type TitleType = {
 children: ReactNode;
 styleAdd?: string;
};
