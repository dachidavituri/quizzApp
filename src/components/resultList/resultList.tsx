import { PropsWithChildren } from "react";
import resultImg from "!/Group 15.png";
import styles from "./resultList.module.css";
import { basicProps } from "@/data";
const ResultList: React.FC<PropsWithChildren<basicProps>> = ({
  children,
  isFinished,
  timeRemaning,
}) => {
  if (isFinished || !timeRemaning) {
    return (
      <div className={styles.resultContainer}>
        <img src={resultImg} />
        <div className={styles.result}>{children}</div>
        {!timeRemaning && <h2 className={styles.time}>Time is up</h2>}
      </div>
    );
  }
};
export default ResultList;
