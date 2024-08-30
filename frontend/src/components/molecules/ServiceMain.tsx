import React from "react";

// scss
import styles from "./styles/ServiceMain.module.scss";

// components

const ServiceMain = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftBox}>
        <h1 className={styles.serviceTitle}>
          DISCOVER
          <br />
          NEW
          <br />
          MUSIC
          <br />
          TOGETHER
        </h1>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.rightTopBox}>
          <h3 className={styles.subTitle}>世界中の音楽を、あなたの指先で。</h3>
          <p className={styles.desc}>
            Tunifyは、世界中の音楽を通じて、人と人とのつながりを深める次世代の音楽サービスです。Spotify、Apple
            Music、YouTubeなどのストリーミングサービスから、お気に入りの曲を集め、自分だけのプレイリストを作成。さらに、QRコードを使った簡単なフレンド登録機能や、外出中に自動で他のユーザーとプレイリストを交換・閲覧する機能も搭載。同じ曲を楽しんでいるユーザーとつながり、新たな音楽の発見と出会いを楽しんでください。音楽を共有することで、音楽の世界を広げ、共感と喜びを分かち合う、これがTunifyの目指す未来です。
          </p>
        </div>
        <div className={styles.rightBottomBox}>
          <div className={styles.bottomLeftBox}>
            <p className={styles.smallTitle}>合計対応楽曲数</p>
            <h3 className={styles.title}>
              <span className={styles.number}>3</span>億
              <span className={styles.number}>9000</span>万曲
            </h3>
          </div>
          <span className={styles.bar}></span>
          <div className={styles.bottomRightBox}>
            <p className={styles.smallTitle}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;
