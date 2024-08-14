import React from "react";

// scss
import styles from "./styles/SlideTextBox.module.scss";

const SlideTextBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.slider}>
        <p className={styles.text}>
          音楽の可能性は無限大だ・音楽という個性溢れるもので全く新しいつながりを・
          新しい人と人の繋がりのトリガーになる・Tunify年内本格始動!
        </p>
      </div>
    </div>
  );
};

export default SlideTextBox;
