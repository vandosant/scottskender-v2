import React from 'react'
import { Link } from 'gatsby'
import Image from './image'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
    }}
  >
    <div className={styles.header}>
      <div style={{ width: '5%' }}>
        <div style={{ clipPath: 'circle(100px at center)' }}>
          <Image />
        </div>
      </div>
      <div>
        <Link to="/" className={styles.headerLink}>
          Home
        </Link>
        <Link to="/blog" className={styles.headerLink}>
          Blog
        </Link>
      </div>
    </div>
  </div>
)

export default Header
