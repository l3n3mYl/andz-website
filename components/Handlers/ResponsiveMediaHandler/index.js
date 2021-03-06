import { node, number } from 'prop-types'
import classNames from 'classnames'
import React from 'react'

import styles from './styles/ResponsiveMediaHandler.module.scss'

const formatRatio = (ratio) => {
  return parseFloat((ratio * 100).toFixed(4))
}

/** 
 * Reserves a space on page for slow-loading resources, using the
 * supplied ratio. Avoids document reflow when child elements load.
 * Handles img, video as well as iframe for media
 * like embedded videos.
 */
const ResponsiveMedia = ({ children, className, ratio }) => (
  <div
    className={classNames(styles.ResponsiveMedia, className)}
    style={{ paddingBottom: `${formatRatio(ratio)}%` }}
  >
    {children}
  </div>
)

ResponsiveMedia.propTypes = {
  children: node.isRequired,
  ratio: number.isRequired
}

export default ResponsiveMedia