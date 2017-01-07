import React, { Component, PropTypes } from 'react';

export default class ToggleableTimerForm extends React.Component {
  render () {
    if (this.props.isOpen) {
      return (<TimerForm />);
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'>
            <i className='plus icon'></i>
          </button>
        </div>
      );
    }
  }
}

