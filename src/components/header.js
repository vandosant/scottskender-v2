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
      <Image />
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
          to="/"
          style={{
            color: '#bf8415',
            paddingRight: '1rem',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
        <Link
          to="/"
          style={{
            color: '#bf8415',
            paddingRight: '1rem',
            textDecoration: 'none',
          }}
        >
          Projects
        </Link>
        <Link
          to="/"
          style={{
            color: '#bf8415',
            textDecoration: 'none',
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  </div>
)

export default Header
