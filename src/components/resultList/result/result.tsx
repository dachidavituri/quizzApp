import React from "react";
import geographyQuiz from "@/data";
import styles from "./result.module.css";
import { ResultProps } from "@/data";
const Result: React.FC<ResultProps> = ({ style, text, svg, score, point }) => {
  const questionsAmount = geographyQuiz.questions.length;
  return (
    <div className={styles.scoreContainer} style={style}>
      <div className={styles.resultType}>
        <div className={styles.circle}>{svg}</div>
        <p className={styles.result}>{text}</p>
      </div>
      <p className={styles.result}>
        {score !== undefined ? score : `${point}/${questionsAmount}`}
      </p>
    </div>
  );
};
export default Result;
