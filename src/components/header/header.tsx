import styles from "./header.module.css";
import geographyQuiz from "@/data";
const Header: React.FC = () => {
  return (
    <div className={styles.heading}>
      <div>QuizTime {geographyQuiz.id}</div>
      <h2>{geographyQuiz.name}</h2>
    </div>
  );
};
export default Header;
