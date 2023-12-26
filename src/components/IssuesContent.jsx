import {useState} from 'react';
import boot from "../assets/boot-orange.png"
import arrow from "../assets/arrow.png"
import education from "../assets/graduation.png"
import error from "../assets/error.png"
import email from "../assets/email.png"
import cloud from "../assets/cloud.png"
import monitor from "../assets/monitor.png"
import updown from "../assets/up-down.png"
import down from "../assets/down-arrow.png"


const data = [
  { 
    securityControl: 'External FootPrint Scan', 
    type: 'Email Domain Missing DMARC', 
    description: '1 Domain missing a DMARC record', 
    status: 'Open', 
    severity: 'Medium', 
    creationDate: 'Dec 08, 2023 02:39 pm', 
  },
  { 
    securityControl: 'External FootPrint Scan', 
    type: 'Email Domain Missing DKIM', 
    description: '1 Domain missing a DKIM record', 
    status: 'Open', 
    severity: 'Medium', 
    creationDate: 'Dec 08, 2023 02:39 pm',
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


const Dropdown = ({ handleClose }) => {
  return (
    <div className="dropdown-content" onClick={handleClose}>
      {/* Dropdown content goes here */}
      <div className='drop-content'>
        <p><svg className='view-drop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>view-gallery</title><path d="M21 3H2V16H21V3M2 17H6V21H2V17M7 17H11V21H7V17M12 17H16V21H12V17M17 17H21V21H17V17Z" /></svg>Default View</p>
        <span>(2)</span>
      </div>
      <div className='drop-content'>
        <p>
          <img src={email} alt="email-auarantine" />Quarantine View</p>
        <span>(0)</span>
      </div>
      <div className='drop-content'>
        <p><img src={email} alt="email" />Email View</p>
        <span>(0)</span>
      </div>
      <div className='drop-content'>
        <p><img src={cloud} alt="cloud" />Cloud DLP View</p>
        <span>(0)</span>
      </div>
      <div className='drop-content'>
        <p><img src={monitor} alt="monitor" />Devices View</p>
        <span>(0)</span>
      </div>
    </div>
  );
};


const FilterDropdown = ({filterClose}) => {
  return(
    <div className='filter-dropdown-content' onClick={filterClose}>
      <div className="filter-drop-content">
        <input type="text" placeholder="Filter" />
      </div>
      <div className="drop-contents-filter">
        <p>Issue Status</p>
        <span>4 Items</span>
      </div>
      <div className="drop-contents-filter">
        <p>Security Controls</p>
        <span>8 Items</span>
      </div>
      <div className="drop-contents-filter">
        <p>Issue Type</p>
        <span>103 Items</span>
      </div>
      <div className="drop-contents-filter">
        <p>Issue Serverity</p>
        <span>5 Items</span>
      </div>
      <div className="drop-contents-filter">
        <p>Users</p>
        <span>4 Items</span>
      </div>
    </div>
  )

}

const IssuesContent = () => {
  const [modalData, setModalData] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(null);
  const [isFilterDropdownVisible, setIsFilterDropdownVisible]= useState(false);



  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const openFilterDropdown = () => {
    setIsFilterDropdownVisible(true);
  }
  const closeFilterDropdown = () => {
    setIsFilterDropdownVisible(false);
  }

  const openModal = (data, modalIndex) => {
    const selectedModalContent = modalContent[modalIndex];
    console.log('Selected Modal Content:', selectedModalContent);
    setModalData({ ...data, modalContent: selectedModalContent });
    console.log('Modal Data:', { ...data, modalContent: selectedModalContent });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const totaldata=data.length;
  return (
    <div className='issuesPage'>
      <div className='issuesHeader'>
        <div className="headerButtons">
          <h2>Issues ({totaldata})</h2>
          <div className="workbtns">
            <div className='left-issue-btn'>
            <button><svg className='search-img' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg></button>
            <button className='default' onClick={isDropdownVisible ? closeDropdown : openDropdown}>
            {isDropdownVisible && <Dropdown handleClose={closeDropdown} />}

              <span><svg className='view' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>view-gallery</title><path d="M21 3H2V16H21V3M2 17H6V21H2V17M7 17H11V21H7V17M12 17H16V21H12V17M17 17H21V21H17V17Z" /></svg>Default View</span>
              <img className='dropdown' src={arrow} alt="dropdown" /></button>
            <hr />
            <button className='filter' onClick= {isFilterDropdownVisible ? closeFilterDropdown : openFilterDropdown}>
              {isFilterDropdownVisible && <FilterDropdown filterClose={closeFilterDropdown} />}
            <svg className='filter-img' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4z"/></svg>
              Filter
              </button>
            </div>
            <div className="issue-right-btn">
              <button><svg className='shareimg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
              </svg></button>
            </div>
          </div>
        </div>
        <div className="issuesBtn">
          <span className='sta'>Issue Status <hr /><button>{totaldata} Issue Statuses</button><svg className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
          <span className='sta'>Issue Serverity <hr /><button>4 Issue Serverities</button><svg className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
          <span className='clear'>Clear All <svg className='close' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
        </div>
        <div className='issuesCard'>
          <div className="tablecontainer">
          <table>
            <thead>
              <tr>
                <th style={{width:"40px", height:"40px"}}><input type='checkbox' /></th>
                <th>
                    <div className="th-data">

                    <div>

                    Security Control
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>
                    <th>
                    <div className="th-data">

                    <div>

                    Type 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                  <th>
                    <div className="th-data">

                    <div>

                    Time 
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

                    Serverity 
                    </div>
                    <div className="th-img">

                    <img className='multiple-arrow' src={updown} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    Creation Date
                    </div>
                    <div className="th-img">

                    <img className='down-arrow' src={down} alt="up-down arrow" />
                    </div>
                    </div>
                    </th>

                    <th>
                    <div className="th-data">

                    <div>

                    Completion Date
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
                <tr key={rowIndex} className='issue-body' onClick={() => openModal(row, rowIndex)}>
                  <td style={{ width: "40px", height: "40px" }}><input type="checkbox" /></td>
                  <td>
                    <img src={boot} alt="boot" style={{ marginRight: '10px' }} />
                    {row.securityControl}
                  </td>
                  <td>{row.type}</td>
                  <td>{row.description}</td>
                  <td style={{ color: '#f56565', fontWeight: 'bold' }}>{row.status}</td>
                  <td>{<button className='creation' style={{ backgroundColor: '#fff0f4', color: "#fc5281", fontWeight: "bold" }}>{row.severity}</button>}</td>
                  <td>{row.creationDate}</td>
                </tr>
                  ))}

            </tbody>
          </table>
          </div>
        </div>
         {modalData && (
        <div
          className={`modal-container ${modalData ? '' : 'hidden'}`}
          onClick={closeModal}
        >
          <div className={`modal ${modalData ? '' : 'hidden'}`} onClick={(e) => e.stopPropagation()}>
            <div className="modal-btn">
            <button onClick={closeModal}>Close</button>
            </div>
            <div className="modal-title">
            <h3>{modalData.description}</h3>
            <button className='creation'style={{ backgroundColor: '#fff0f4', color:"#fc5281", fontWeight:"bold" }}>{modalData.severity}</button>
            </div>

            <div className="modal-nav">
              <div className='modal-nav-links active-modal-link'><span>1</span> Issue overview</div>
              <div className='modal-nav-links'><span>2</span> Remediation options</div>
              <div className='modal-nav-links'><span>3</span> Fix Issue</div>
            </div>

            <div className="modal-description">
              <p className='modal-para-title'><span><img className='des-img' src={education} alt="education" /></span> Description</p>
              <div className="modal-des-data">
              <div className="modal-main-content">
                  <p className='firstpara'>{modalData.modalContent.para1}</p>
                  <p className='secpara'>{modalData.modalContent.para2}</p>
                  <p className='lipara'>Considerations:</p>
                  <ol>
                  {modalData.modalContent.list.map((data, index) => (
                    <li key={index}>{data.list1}</li>
                    ))}
                  </ol>
                  <p className="date">Issue Created at: <span>{modalData.col6}</span></p>
                </div>    
                </div>
                </div>
                <div className="modal-details">
              <p className='modal-para-title'><span><img className='des-img' src={error} alt="error" /></span> Details</p>
              <div className="details-content">

              <ul>
                <li>deepdefend.tech</li>
              </ul>
              <p>Domain: <span>deepdefend.tech</span></p>
              </div>
            </div>
            <div className="modal-down-button">
              <button className='ignore'>Ignore</button>
              <button className='remediation'>Remediation</button>
            </div>
          </div>
        </div>
      )}
        </div>
    </div>
  );
}

export default IssuesContent;
