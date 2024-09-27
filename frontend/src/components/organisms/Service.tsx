import React from "react";

// scss
import styles from "./styles/Service.module.scss";

// components
import ServiceCardBox from "../templates/ServiceCardBox";
import ServiceCard from "../molecules/ServiceCard";
import ServiceMain from "../molecules/ServiceMain";

const Service = () => {
  return (
    <div className={styles.service}>
      <div className={styles.container}>
        <ServiceMain />
        <ServiceCardBox id="serviceCardBox">
          <ServiceCard
            id="01"
            link="/"
            number="01"
            jaTitle="トップ10プレイリスト"
            enTitle="Top 10 Playlist"
            tagArray={["Spotify", "Apple Music", "SoundCloud"]}
            desc="お気に入りの楽曲を集めて、自分だけのトップ10プレイリストを作成しましょう。SpotifyやApple Music、SoundCloudなどのプラットフォームから自由に選曲し、あなただけの音楽コレクションをシェアできます。"
            img="/images/hero2.jpg"
          />
          <ServiceCard
            id="02"
            link="/"
            number="02"
            jaTitle="フレンド登録"
            enTitle="Friend Connection"
            tagArray={["QR Code", "Social Connect", "Music Sharing"]}
            desc="QRコードを使って簡単に友達と繋がり、お互いのプレイリストを共有しましょう。音楽を通じて友達と新しい発見を楽しむことができます。"
            img="/images/hero2.jpg"
          />
          <ServiceCard
            id="03"
            link="/"
            number="03"
            jaTitle="すれ違いプレイリスト"
            enTitle="Playlist Encounter"
            tagArray={["Proximity Share", "Music Sync", "Smart Alerts"]}
            desc="街中やイベントで他のTunifyユーザーとすれ違った際、自動でプレイリストを交換できる機能です。同じ曲を聴いている人と瞬時に繋がり、音楽の輪を広げましょう。"
            img="/images/hero2.jpg"
          />
          <ServiceCard
            id="04"
            link="/"
            number="04"
            jaTitle="リアルタイムミュージックシンク"
            enTitle="Real-Time Music Sync"
            tagArray={["Live Sync", "Shared Listening", "Instant Alerts"]}
            desc="リアルタイムで他のユーザーと同じ曲を共有し、一緒に音楽を楽しむことができます。共有中にアラートが鳴り、すぐに新しい楽曲を発見したり、感想をリアルタイムで共有できます。"
            img="/images/hero2.jpg"
          />
          <ServiceCard
            id="05"
            link="/"
            number="05"
            jaTitle="カスタムプレイリストシェア"
            enTitle="Custom Playlist Share"
            tagArray={["Personalized", "Curated Music", "Cross-Platform"]}
            desc="あなたが厳選した楽曲を使ったカスタムプレイリストを作成し、他のユーザーと簡単に共有しましょう。異なる音楽ストリーミングサービス間でもシームレスにプレイリストをシェアできます。"
            img="/images/hero2.jpg"
          />
        </ServiceCardBox>
      </div>
    </div>
  );
};

export default Service;
