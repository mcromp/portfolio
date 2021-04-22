import { ReactNode } from "react";

export const SubHeader = ({ children, styleAdd = "" }: SubHeaderType) => (
 <h3 className={`block__sub-header ${styleAdd}`}>{children}</h3>
);

type SubHeaderType = {
 children: ReactNode;
 styleAdd?: string;
};
