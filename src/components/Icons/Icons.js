import React from 'react'
import PropTypes from 'prop-types'
import Raduim from 'radium'
import { data } from '../../utils/icons'

function Icons ({ size, color, style, icon }) {
  const styles = {
    svg: {
      display: 'block',
      boxSizing: 'border-box',
      width: `${size}px`,
      padding: `${size / (size / 10)}px`
    },
    path: {
      fill: color
    }
  }

  return (
    <svg
      style={[style, styles.svg]} viewBox='0 0 512 512'>
      <path style={styles.path} d={data[icon]} />
    </svg>
  )
}

Icons.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object
}

Icons.defaultProps = {
  size: 16
}

export default Raduim(Icons)
