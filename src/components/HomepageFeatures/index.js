import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Ingyenes scriptek!",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>Csatlakozz a Fivemland-hez, hogy további scripteket találj!</>
    ),
  },
  {
    title: "Közösségünk",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        A Fivemland-en egy segítőkész és egy csalómentes közösség tagja lehetsz!
      </>
    ),
  },
  {
    title: "Fejlesztők",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>- Csoki, - Ádám, - Tompecs</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
