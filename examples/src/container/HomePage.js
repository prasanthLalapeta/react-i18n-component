/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homepageActions from './actions';
import SampleComponent from '../../../src';


class HomePage extends React.PureComponent {   // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage() {
    this.props.actions.allHomepageActions.changeLocale();
  }

  render() {
    return (
      <SampleComponent changeLanguage={this.changeLanguage} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    allHomepageActions: bindActionCreators(homepageActions, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
