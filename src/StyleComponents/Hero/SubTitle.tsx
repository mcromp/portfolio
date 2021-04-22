import { ReactNode } from "react";

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
