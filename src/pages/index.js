import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/intro"
          >
            Get Started Here 💖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title={`Best Notes in the World`} description="You will love it!">
      <HomepageHeader />
      <main
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>This website is made using LOVE 💞💞</h1>
        <p>Also Docusaurus if you guys are interested.</p>
        <img
          height={300}
          width={300}
          style={{
            borderRadius: 10,
            marginBottom: 16,
          }}
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/44dcaedb-4985-4fe5-8d34-9cac90bc308c-profile_image-300x300.jpeg"
        />
        <Link
          className="button button--primary button--lg"
          href="https://github.com/tanamaroby"
        >
          My GitHub!
        </Link>
      </main>
    </Layout>
  );
}
