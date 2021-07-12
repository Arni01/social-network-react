import React, { Component } from 'react';

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  handleStatusChange = ({ target }) => {
    this.setState({
      status: target.value,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus={true}
              value={this.state.status || ''}
              onChange={this.handleStatusChange}
            />
            <button onClick={this.deactivateEditMode}>Save</button>
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
