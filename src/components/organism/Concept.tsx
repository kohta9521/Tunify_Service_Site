import React from "react";

// scss
import styles from "./styles/Concept.module.scss";

// components
import SecSubTitle from "../atoms/SecSubTitle";
import SecTitle from "../atoms/SecTitle";

const Concept = () => {
  return (
    <div className={styles.concept}>
      <div className={styles.container}>
        <SecSubTitle id={1} stringId="concept" text="Concept" />
        <SecTitle
          id={1}
          text={
            <>
              <h1>個性溢れる音楽で繋がる</h1>
            </>
          }
        />
        <SecTitle
          id={1}
          text={
            <>
              <h1>全く新しいSNS</h1>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Concept;
