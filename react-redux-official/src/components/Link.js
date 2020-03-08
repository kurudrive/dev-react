/**
 * フッター部分のボタンコンポーネント
 * 
 * 1. index.js
 * 2. /components/App.js
 * 3. /components/Footer.js
 * 4. /containers/FilterLink.js
 * 5. /components/Link.js (this file)
 */

import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link