import { ReactNode } from "react";

export const Block = ({ children, styleAdd = "" }: BlockType) => (
 <div className={`block__block ${styleAdd}`}>{children}</div>
);

type BlockType = {
 children: ReactNode;
 styleAdd?: string;
};
