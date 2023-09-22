import styles from "./AnimationImage.module.css";
import StageImage from "../../assets/images/ani1.png";
import IconImage from "../../assets/images/ani2.png";
import Coin1 from "../../assets/images/ani3.png";
import Coin2 from "../../assets/images/ani4.png";
import Coin3 from "../../assets/images/ani5.png";

const AnimationImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img1} src={StageImage} />
        <img className={styles.img2} src={IconImage} />
        <img className={styles.img3} src={Coin1} />
        <img className={styles.img4} src={Coin2} />
        <img className={styles.img5} src={Coin3} />
      </div>
    </div>
  );
};

export default AnimationImage;
