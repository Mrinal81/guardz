import React from 'react';
import updown from "../assets/up-down.png"
import down from "../assets/down-arrow.png"

const MonitorContent = () => {

  return (
    <div className='monitorPage'>
      <div className='monitorHeader'>
        <div className="monitorButtons">
          <h2>Endpoint Security</h2>
          <div className="globeworkbtns">
            <button><svg className='search-img' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg></button>
            <button className='filter'><svg className='filter-img' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4z"/></svg>Filter</button>
          </div>
        </div>
        <div className='monitorCard'>
          <div className="monitortablecontainer">
            <table>
              <thead>
                <tr className='thead'>
                  <th>
                    <div className="th-data">

                    <div>
                    Hostname 
                    </div>
                    <div className="th-img">
                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                  <th>
                    <div className="th-data">

                    <div>
                      Status 
                      </div>
                      <div className="th-img">
                      <img className='down-arrow' src={down} alt="up-down arrow" />
                      </div>
                    </div>
                      </th>


                  <th>
                    <div className="th-data">

                    <div>

                    Serial Number 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                  <th>
                    <div className="th-data">

                    <div>

                    Users 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                  <th>
                    <div className="th-data">

                    <div>

                    OS 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    Agent Version
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    Antivirus
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    First Seen 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    Last Seen 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>
                    <th>
                    <div className="th-data">

                    <div>

                    Last Activity Date
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

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
