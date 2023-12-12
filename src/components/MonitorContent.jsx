import React from 'react';

const MonitorContent = () => {

  return (
    <div className='monitorPage'>
      <div className='monitorHeader'>
        <div className="monitorButtons">
          <h2>Endpoint Security</h2>
          <div className="monitorworkbtns">
            <button>search</button>
            <button>Filter</button>
          </div>
        </div>
        <div className='monitorCard'>
          <div className="monitortablecontainer">
            <table>
              <thead>
                <tr className='thead'>
                  <th>Hostname</th>
                  <th>Status</th>
                  <th>Serial Number</th>
                  <th>Users</th>
                  <th>OS</th>
                  <th>OS Version</th>
                  <th>Agent Version</th>
                  <th>Antivirus</th>
                  <th>First Seen</th>
                  <th>Last Seen</th>
                  <th>Last Activity Date</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitorContent;
