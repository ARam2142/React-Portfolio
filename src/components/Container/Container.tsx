import * as React from "react";

interface IProps {
    children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children, ...props }) => (
    <div className="container" {...props}>{children}</div>
);
export default Container;