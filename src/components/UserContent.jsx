import {useState} from 'react';
import cloud from "../assets/cloud.png";
import hacker from "../assets/hacker2.png";
import email from "../assets/email.png";
import folder from "../assets/folder.png";
import completed from "../assets/completed.png"
import mark from "../assets/question.png";
import check from "../assets/checkmark.png";
import education from "../assets/graduation.png"
import error from "../assets/error.png"
import updown from "../assets/up-down.png"
import down from "../assets/down-arrow.png"


const data = [
  { 
    col1: 'AB', 
    col2: 'abc@gmail.com', 
    col3: 'ABCD ARTED', 
    col4: "Low", 
    col5: mark,
    col6: mark, 
    col7: mark, 
    col8: check, 
    col9: mark, 
    col10:mark,
    col11:'N/A', 
  },
];


const modalContent=[
  {
    para1: 'Risk: Without DMARC policies in place, your organization is vulnerable to email spoofing, phishing attacks, and brand impersonation, which can lead to data breaches and reputational damage.',
    para2: 'Recommendation: Implement DMARC policies for your domains to authenticate legitimate email sources, prevent unauthorized use of your domains, and receive reports on email activity.',
    list:[
      {
        list1: 'Start with a "none" policy to monitor email traffic without affecting delivery.',
      },
      {
        list1: 'Gradually progress to a "quarantine" or "reject" policy to control unauthenticated emails.',
      },
      {
        list1: 'Ensure SPF and DKIM are correctly configured for your domains.',
      },
      {
        list1: 'Set up a dedicated email address to receive DMARC reports and analyze them regularly.',
      },
  ],
    shortdetail: 'By implementing DMARC policies, your organization can enhance email security, reduce the risk of phishing attacks, and gain insights into email authentication.',
  },
  {
    para1: 'Risk: Without DKIM signing, your organization is vulnerable to email forgery and phishing attacks, which can erode trust and compromise data security.',
    para2: 'Recommendation: Implement DKIM signing for your email domains to cryptographically verify the authenticity of your outgoing emails, reducing the risk of unauthorized tampering or spoofing',
    list:[
      {
        list1: 'Identify all email domains used for sending messages.',
      },
      {
        list1: 'Generate DKIM keys for each domain and configure them in your DNS records.',
      },
      {
        list1: 'Ensure proper key management to protect DKIM keys from unauthorized access.',
      },
      {
        list1: 'Test and monitor DKIM-signed emails to ensure they are correctly configured and not causing delivery issues.',
      },
  ],
    shortdetail: 'By implementing DKIM, your organization can enhance email security and prevent malicious actors from altering the content of your emails, thereby safeguarding your brand and data integrity.',
  },
]


const UserContent = () => {

  const [userData, setUserData] = useState(null);

  const openModal = (data, modalIndex) => {
    const selectedModalContent = modalContent[modalIndex];
    console.log('Selected Modal Content:', selectedModalContent);
    setUserData({ ...data, modalContent: selectedModalContent });
    console.log('Modal Data:', { ...data, modalContent: selectedModalContent });
  };

  const closeModal = () => {
    setUserData(null);
  };
const totalcount=data.length
  return (
    <div className='userPage'>
      <div className='userHeader'>
        <div className="userButtons">
          <h2>Users ({totalcount})</h2>
          <div className="userworkbtns">
            <div className="left-issue-btn left">
            <button><svg className='search-img' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg></button>
            <button className='filter'><svg className='filter-img' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4z"/></svg>Filter</button>
            </div>
            <div className="issue-right-btn user-right">
              <button className='user-setting'><svg className='operation-img setting' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path d="M47.16,21.221l-5.91-0.966c-0.346-1.186-0.819-2.326-1.411-3.405l3.45-4.917c0.279-0.397,0.231-0.938-0.112-1.282 l-3.889-3.887c-0.347-0.346-0.893-0.391-1.291-0.104l-4.843,3.481c-1.089-0.602-2.239-1.08-3.432-1.427l-1.031-5.886 C28.607,2.35,28.192,2,27.706,2h-5.5c-0.49,0-0.908,0.355-0.987,0.839l-0.956,5.854c-1.2,0.345-2.352,0.818-3.437,1.412l-4.83-3.45 c-0.399-0.285-0.942-0.239-1.289,0.106L6.82,10.648c-0.343,0.343-0.391,0.883-0.112,1.28l3.399,4.863 c-0.605,1.095-1.087,2.254-1.438,3.46l-5.831,0.971c-0.482,0.08-0.836,0.498-0.836,0.986v5.5c0,0.485,0.348,0.9,0.825,0.985 l5.831,1.034c0.349,1.203,0.831,2.362,1.438,3.46l-3.441,4.813c-0.284,0.397-0.239,0.942,0.106,1.289l3.888,3.891 c0.343,0.343,0.884,0.391,1.281,0.112l4.87-3.411c1.093,0.601,2.248,1.078,3.445,1.424l0.976,5.861C21.3,47.647,21.717,48,22.206,48 h5.5c0.485,0,0.9-0.348,0.984-0.825l1.045-5.89c1.199-0.353,2.348-0.833,3.43-1.435l4.905,3.441 c0.398,0.281,0.938,0.232,1.282-0.111l3.888-3.891c0.346-0.347,0.391-0.894,0.104-1.292l-3.498-4.857 c0.593-1.08,1.064-2.222,1.407-3.408l5.918-1.039c0.479-0.084,0.827-0.5,0.827-0.985v-5.5C47.999,21.718,47.644,21.3,47.16,21.221z M25,32c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7C32,28.866,28.866,32,25,32z"></path>
                </svg>Setting</button>
              <button><svg className='shareimg share-btn' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
              </svg></button>
            </div>
          </div>
        </div>
        <div className="userBtn">
          <span className='usbt'>Status <hr /><button>Active</button> <svg className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
          <span className='clear'>Clear All  <svg className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
        </div>
        <div className='userCard'>
          <div className="usertablecontainer">
            <table>
              <thead>
                <tr className='thead'>
                <th>
                    <div className="th-data">

                    <div>

                    Status
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>
                    <th>
                    <div className="th-data">

                    <div>

                    Email Address 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                  <th>
                    <div className="th-data">

                    <div>

                    Full Name 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                  <th>
                    <div className="th-data">

                    <div>

                    Risk Level 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    <img src={cloud} alt="cloud-img" /> 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    <img src={cloud} alt="cloud-img" /> 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    <img src={folder} alt="cloud-img" /> 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    <img src={hacker} alt="cloud-img" /> 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    <img src={email} alt="cloud-img" /> 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>


                    <th>
                    <div className="th-data">

                    <div>

                    <img src={completed} alt="cloud-img" /> 
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
                    <th>
                    <div className="th-data">

                    <div>

                    Groups
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>
                </tr>
              </thead>
              <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className='user-list' onClick={()=> openModal(row, rowIndex)}>
                  {Object.entries(row).map(([key, cell], cellIndex) => (
                    <td key={cellIndex}> 
                   <span className='user-profile'>
                    <span className={key === 'col1' ? 'first-column' : ''} >
                      {key === 'col4' ? (
                        <button className='risk'>{cell}</button>
                        ) : cell.includes('data:image') ? (
                          <img src={cell} alt={`img-${rowIndex}-${cellIndex}`} />
                          ) : (
                            cell
                            )}
                          </span>
                            </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>
        {userData && (
        <div
          className={`user-container ${userData ? '' : 'hidden'}`}
          onClick={closeModal}
        >
          <div className={`user ${userData ? '' : 'hidden'}`} onClick={(e) => e.stopPropagation()}>
            <div className="modal-btn">
            <button onClick={closeModal}>Close</button>
            </div>
            <div className="modal-title-user ">
            <h3>{userData.col2}</h3>
            <button className='creation'style={{ backgroundColor: '#00e48a', color:"#ffffff", fontWeight:"bold" }}>{userData.col4} Risk</button>
            </div>
            <div className="user-issue-title">
                <img src={error} alt="error" /> 
              <h4>Issues</h4>
            </div>

            <div className="user-nav">
              <div className='user-nav-links active-user-link'>
               <p className='user-para'>Issue overview </p>
               <span>0</span>
                </div>
              <div className='user-nav-links'>
                <p className='user-para'>Remediation options</p>
                <span>0</span>
                </div>
              <div className='user-nav-links'>
                <p className='user-para'>Fix Issue</p>
                <span>0</span>
                </div>
            </div>
            <div className="user-details">
              <div className="user-details-content">
                <img className='des-img' src={completed} alt="completed" />
              <h4 className='user-para-title'>Details</h4>
              </div>
              <div className="user-content">
                <div className='user-content-left'>
                    <div className="email">
                  <span>Email Address</span>
                  <p>{userData.col2}</p>
                    </div>
                    
                    <div className="first-name">
                  <span>First Name</span>
                  <p>ABCD</p>
                    </div>
                    
                    <div className="activity">
                    <span>Last Activity Date</span>
                    <p>N/A</p>
                   
                  </div>
                    <div className="license">
                    <span>Google Workspace License</span>
                    <p>Active</p>
                    </div>
                    
                    <div className="apps">
                    <span>Cloud Apps</span>
                    <p>N/A</p>
                    </div>
                    

                </div>
                <div className="user-content-right">
                <div className="groups">
                      <span>Groups</span>
                      <p>---</p>
                    </div>
                <div className="last-name">
                      <span>Last Name</span>
                      <p>ARTED</p>
                    </div>
                <div className="organisation">
                      <span>Organization Name</span>
                      <p>{userData.col3}</p>
                    </div>
                <div className="role">
                      <span>Google Workspace Role</span>
                      <p>User</p>
                    </div>
                <div className="device">
                      <span>Devices</span>
                      <p>N/A</p>
                    </div>   
                </div>
              </div>
            </div>
            <div className="user-permissions">
            <div className="user-permission-content">
                <img className='des-img' src={completed} alt="completed" />
              <h4 className='user-para-title'>Guardz Status & Permissions</h4>
              </div>
              <div className="permissions-content">
                <div className="permissions-left">
                  <span>License</span>
                  <p>Active</p>
                </div>
                <div className="permissions-right">
                  <span>Role</span>
                  <p>Admin</p>
                </div>
              </div>
            </div>

            <div className="controls">
            <div className="user-control-content">
                <img className='des-img' src={completed} alt="completed" />
              <h4 className='user-para-title'>Status of Security Controls</h4>
              </div>
              <div className="control-all-content">

              <div className="controls-left">
                <div className="control-posture dd">
                  <img src={mark} alt="mark" />
                  <p>Cloud Directory Posture</p>
                </div>
                <div className="control-data dd">
                <img src={mark} alt="mark" />
                  <p>Cloud Data</p>
                </div>
                <div className="control-protection dd">
                <img src={mark} alt="mark" />
                  <p>Email Protection</p>
                </div>
              </div>
              <div className="controls-right">
                <div className="control-awarness dd">
                <img src={mark} alt="mark" />
                  <p>Awareness</p>
                </div>
                <div className="control-web dd">
                <img src={check} alt="check" />
                  <p>Dark Web Monitoring</p>
                </div>
                <div className="control-browsing dd">
                <img src={mark} alt="mark" />
                  <p>Secure Browsing</p>
                </div>
              </div>
              </div>
            </div>

           
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default UserContent;
