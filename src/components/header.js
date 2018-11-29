import React from 'react'
import { Link } from 'gatsby'
import Image from './image'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div style={{ width: '10%' }}>
        <div style={{ clipPath: 'circle(100px at center)' }}>
          <Image />
        </div>
      </div>
      <div>
        <Link
          to="/"
          style={{
            color: '#bf8415',
            paddingRight: '1rem',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
        <Link
          to="/blog"
          style={{
            color: '#bf8415',
            paddingRight: '1rem',
            textDecoration: 'none',
          }}
        >
          Blog
        </Link>
      </div>
    </div>
  </div>
)

export default Header
