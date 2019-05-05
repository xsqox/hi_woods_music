import React from "react"
import PropTypes from "prop-types"

const HiWoodsBrand = ({ text }) => (
  <span style={{ "font-family": "Manic Depressive" }}>{text}</span>
)

HiWoodsBrand.propTypes = {
  text: PropTypes.string,
}

HiWoodsBrand.defaultProps = {
  text: "Hi Woods",
}

export default HiWoodsBrand
