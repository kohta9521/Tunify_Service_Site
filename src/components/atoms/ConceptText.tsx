import React from "react";

// scss
import styles from "./styles/ConceptText.module.scss";

// props
export type ConceptTextProps = {
  text: React.ReactNode;
};

const ConceptText = ({ text }: ConceptTextProps) => {
  return <div className={styles.textBox}>{text}</div>;
};

export default ConceptText;
