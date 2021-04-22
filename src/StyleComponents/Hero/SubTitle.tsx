import { ReactNode } from "react";
import "./styles/styles.css";

export const SubTitle = ({
 children,
 styleAdd = "",
}: SubTitleType): JSX.Element => (
 <p className={`hero__subtitle ${styleAdd}`}>{children}</p>
);

type SubTitleType = {
 children: ReactNode;
 styleAdd?: string;
};
