import { PropsWithChildren } from "react";
import { basicProps } from "@/data";
const Base: React.FC<PropsWithChildren<basicProps>> = ({
  children,
  isFinished,
  timeRemaning,
}) => {
  if (!isFinished && timeRemaning) {
    return <>{children}</>;
  }
};
export default Base;
