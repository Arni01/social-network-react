import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const cancelStatus = () => {
    setEditMode(false);
    setStatus(props.status);
  };

  const saveStatus = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const handleStatusChange = ({ target }) => {
    setStatus(target.value);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus={true}
            onChange={handleStatusChange}
            value={status}
          />
          <button onClick={saveStatus}>Save</button>
          <button onClick={cancelStatus}>Cancel</button>
        </div>
      ) : (
        <div>
          <b>Status: </b>
          <span onDoubleClick={activeEditMode}>{props.status}</span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
