import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styles from '../index.module.css'

const IndexPage = () => (
  <Layout>
    <section className={styles.mural}>
      <section className={styles.textContainer}>
        <h2 className={styles.textHero}>Scott Skender</h2>
        <ul className={`${styles.textHeroList} ${styles.textHeroListLeft}`}>
          <li>JavaScript</li>
          <li>Node</li>
          <li>React</li>
          <li>React Native</li>
          <li>Redux</li>
          <li>GraphQL</li>
          <li>PostgreSQL</li>
          <li>DynamoDB</li>
        </ul>
        <ul className={`${styles.textHeroList} ${styles.textHeroListCenter}`}>
          <li>Domain Driven Design</li>
          <li>Microservices</li>
          <li>Evolutionary Arch</li>
          <li>Amazon Web Services</li>
          <li>Data Driven</li>
          <li>Customer Focused</li>
          <li>Automation Driven</li>
          <li>Always Improving</li>
        </ul>
        <ul className={`${styles.textHeroList} ${styles.textHeroListRight}`}>
          <li>Ruby</li>
          <li>Rails</li>
          <li>RSpec</li>
          <li>Vim</li>
          <li>Bash</li>
          <li>Python</li>
          <li>Processing</li>
          <li>openFrameworks</li>
        </ul>
      </section>
    </section>
    <section className={[styles.mural, styles.muralBlue]}>
      <div className={styles.row}>
        <div className={styles.panel}>Projects</div>
        <div className={styles.panel}>
          <a href="http://scribble.scottskender.com">scribble</a>
          <a
            href="https://github.com/vandosant/web-synthesizer"
            className={styles.textSmall}
          >
            [github repo]
          </a>
        </div>
        <div className={styles.panel}>
          <a href="http://unite-app.s3-website-us-east-1.amazonaws.com/">
            unite
          </a>
          <a
            href="https://github.com/vandosant/unite"
            className={styles.textSmall}
          >
            [github repo]
          </a>
        </div>
        <div className={styles.panel}>
          <span>voice of the bubble</span>
          <a
            href="https://github.com/vandosant/voice-of-the-bubble"
            className={styles.textSmall}
          >
            [github repo]
          </a>
        </div>
        <div className={styles.panel}>
          <span>colatte</span>
          <a
            href="https://github.com/vandosant/colatte"
            className={styles.textSmall}
          >
            [github repo]
          </a>
        </div>
        <div className={styles.panel}>
          <span>game of life</span>
          <a
            href="https://github.com/vandosant/game-of-life"
            className={styles.textSmall}
          >
            [github repo]
          </a>
        </div>
      </div>
    </section>
    <section className={[styles.mural, styles.muralYellow]}>
      <div className={styles.row}>
        <div className={styles.panel}>Contact</div>
        <div className={styles.panel}>
          <a href="https://twitter.com/scottskender">Twitter</a>
        </div>
        <div className={styles.panel}>
          <a href="https://github.com/vandosant">Github</a>
        </div>
        <div className={styles.panel}>
          <a href="https://linkedin.com/in/scottskender">Linkedin</a>
        </div>
        <div className={styles.panel}>
          <span>sjskender [at] gmail</span>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
