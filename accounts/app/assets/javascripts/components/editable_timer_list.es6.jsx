import React, { Component, PropTypes } from 'react';

export default class EditableTimerList extends React.Component {
  render () {
    return(
      <div>
        <EditableTimer title="Learn React" project="Web Domination" elapsed="8986300" runningSince={null} editFormOpen={true} />
        <EditableTimer title='Learn extreme ironing' project='World Domination' elapsed='3890985' runningSince={null} editFormOpen={true} />
      </div>
    )
  }
}

