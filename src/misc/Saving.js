import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Displays "Saving" when button is pressed
 */
export default class Saving extends PureComponent {
  static propTypes = {
    /** Whether the component should be render "Saving" */
    isSaving: PropTypes.bool,
  }

  static defaultProps = {
    isSaving: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      isSaved: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isSaving && nextProps.isSaving === false) {
      this.setState({ isSaved: true });
      setTimeout(() => {
        this.setState({ isSaved: false });
      }, 1000);
    }
  }

  render() {
    // Passed down from outside
    const { isSaving } = this.props;

    // Managed internally
    const { isSaved } = this.state;

    if (isSaving) {
      // do something
      return (<span>Saving... <i className="fa fa-spinner fa-spin fa-fw" /></span>);
    } else if (isSaved) {
      // show saved
      return (<span>Saved</span>);
    }
    return (<span>&nbsp;</span>);
  }
}
