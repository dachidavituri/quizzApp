import styles from "./progress.module.css";
import geographyQuiz from "@/data";
import { ProgressProps } from "@/data";

const Progress: React.FC<ProgressProps> = ({ currentQuestion }) => {
  return (
    <div className={styles.progressContainer}>
      <progress
        value={currentQuestion + 1}
        max={geographyQuiz.questions.length}
      ></progress>
      <p>
        {currentQuestion + 1}/{geographyQuiz.questions.length}
      </p>
    </div>
  );
};
export default Progress;
