import React from 'react'
// import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import Radium from 'radium'
import Icons from '../Icons'
import PropTypes from 'prop-types'

function AppSelector(props) {
  const styles = {
    container: {
      base: {
        cursor: 'pointer'
      },
      dark: {

      },
      light: {

      },
      state: {

      }
    }
  }

  const onAppSelectorClick = () => {
    console.log('Clicked on App Selector!')
  }

  return (
    <div>
      <a
        onClick={onAppSelectorClick}
        style={styles.container.base}>
        <Icons color={colors.white2} icon='app' size={36} />
      </a>
      <p>{props.selectedApp}</p>
    </div>
  )
}

AppSelector.propTypes = {
  selectedApp: PropTypes.string
}

AppSelector.defaultProps = {

}

export default Radium(AppSelector)
