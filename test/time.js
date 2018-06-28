import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * General component description.
 */
class MyComponent extends Component {
  static defaultProps = {
    foo: 42,
    bar: 21
  }
  render() {
    // ...
  }
}

MyComponent.propTypes = {
  /**
   * Description of prop "foo".
   */
  foo: PropTypes.number,
  /**
   * Description of prop "bar" (a custom validation function).
   */
  bar: PropTypes.number.isRequired,
  //d asdas
  //asdasd
  baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
  })
}

export default MyComponent
