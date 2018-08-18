import React from 'react'
// import PropTypes from 'prop-types'
import * as colors from '../../utils/colors'
import Radium from 'radium'
import Icons from '../Icons'

function AppSelector(props) {
  // const styles = {
  //   container: {
  //     base: {

  //     },
  //     dark: {

  //     },
  //     light: {

  //     },
  //     state: {

  //     }
  //   }
  // }

  return (
    <div>
      <Icons color={colors.white2} icon='app' size={36} />
    </div>
  )
}

AppSelector.propTypes = {

}

AppSelector.defaultProps = {

}

export default Radium(AppSelector)
