import React from 'react'
import PropTypes from 'prop-types'
import Raduim from 'radium'
import { data } from '../../utils/icons'

function Icons (props) {
  const styles = {
    svg: {
      display: 'block',
      boxSizing: 'border-box',
      width: `${props.size}px`,
      height: `${props.size}px`,
      padding: `${props.size / (props.size / 10)}px`
    },
    path: {
      fill: props.color
    }
  }

  return (
    <svg
      style={[styles.svg]} viewBox='0 0 512 512'
      width={`${props.size}px`}
      height={`${props.size}px`}>
      <path style={styles.path} d={data[props.icon]} />
    </svg>
  )
}

Icons.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
}

Icons.defaultProps = {
  size: 16
}

export default Raduim(Icons)
