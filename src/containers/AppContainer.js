import React, { Component } from 'react';
import scrollIntoView from 'scroll-into-view';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext();

export class AppProvider extends Component {
  static slideRefs = {};
  static propTypes = {
    children: PropTypes.node.isRequired,
  };


  state = {
    activeSlide: 0,
  };

  setActiveSlide = (activeSlide) => {
    this.setState({ activeSlide });
  }

  setActiveSlideViaScroll = ({ visible, slide }) => {
    if (!visible) {
      return;
    }

    this.setActiveSlide(slide);
  }

  storeSlideRef = ({ el, index }) => {
    AppProvider.slideRefs[index] = el;
  }

  scrollSlideIntoView = (slide) => {
    scrollIntoView(AppProvider.slideRefs[slide], { time: 500 });
  }

  render() {
    return (
      <Provider
        value={{
          setActiveSlide: this.setActiveSlide,
          storeSlideRef: this.storeSlideRef,
          scrollSlideIntoView: this.scrollSlideIntoView,
          setActiveSlideViaScroll: this.setActiveSlideViaScroll,
          ...this.state,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export const withAppContainer = WrappedComponent => props => (
  <Consumer>
    {context => <WrappedComponent {...props} {...context} />}
  </Consumer>
);
