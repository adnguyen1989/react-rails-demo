import React, { Component, PropTypes } from 'react';

export default class TimersDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timers:
      [
        {
          title: 'Practice squat',
          project: 'Gym Chores',
          id: Math.floor((Math.random() * 10000) + 1),
          elapsed: 5456099,
          runningSince: Date.now(),
        },
        {
          title: 'Bake squash',
          project: 'Kitchen Chores',
          id: Math.floor((Math.random() * 10000) + 1),
          elapsed: 1273998,
          runningSince: null,
        }
      ]
    };
    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.handleUpdateFormSubmit = this.handleUpdateFormSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
  }

  handleStartClick(id){
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          return Object.assign({}, timer, {
            runningSince: Date.now(),
          })
        } else {
          return timer;
        }
      })
    })
  }

  handleStopClick(id){
    // const now = Date.now()

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          // const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + Date.now() - timer.runningSince,
            runningSince: null,
          })
        } else {
          return timer;
        }
      })
    })
  }

  handleDeleteClick(id) {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== id)
    })
  }

  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  handleUpdateFormSubmit(attrs) {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project
          })
        } else {
          return timer;
        }
      })
    })
  }

  createTimer(timer) {
    const t = this.newTimer(timer);

    this.setState({
      timers: this.state.timers.concat(t),
      function() {
        console.log(this.state.timers);
      }
    })

  }

  newTimer(timer) {
    timer.id = Math.floor((Math.random() * 10000) + 1);
    timer.elapsed = 0;
    timer.runningSince = null;
    return timer;
  }

  render () {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleUpdateFormSubmit}
            onDeleteClick={this.handleDeleteClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />

          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    )
  }
}

