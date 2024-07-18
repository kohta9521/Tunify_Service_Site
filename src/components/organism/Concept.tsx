import Image from 'next/image';
import React from 'react';

import ConceptText from '../atoms/ConceptText';
import SecSubTitle from '../atoms/SecSubTitle';
import SecTitle from '../atoms/SecTitle';
import styles from './styles/Concept.module.scss';

const Concept = () => {
  return (
    <div className={styles.concept}>
      <div className={styles.container}>
        <SecSubTitle
          id={1}
          stringId='concept'
          text='Concept'
        />
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
        <div className={styles.flex}>
          <div className={styles.leftBox}>
            <Image
              className={styles.image1}
              src='/images/top/concept1.png'
              width={674}
              height={903}
              alt='conceptの画像'
            />
            <Image
              className={styles.image2}
              src='/images/top/concept2.png'
              width={466}
              height={619}
              alt='conceptの画像'
            />
          </div>
          <div className={styles.rightBox}>
            <ConceptText
              text={
                <>
                  <p>
                    あなたが、あなたの時間を生きるように。
                    <br />
                    私も、私の時間を生きている。
                    <br />
                    誰もが自分の喜びや悲しみを、その表情を
                    <br />
                    毎分毎秒、その目元に宿している。
                    <br />
                    つまり、がんばって生きている。ってことだ。
                    <br />
                    <br />
                    私たちのめまぐるしい毎日を映す目元を ケアする時間をちょっとでも楽に。
                    <br />
                    キーボードのショートカットキーみたいに さっと整えて、あなたに似合う、
                    <br />
                    がんばりすぎない目元ケアを。
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
