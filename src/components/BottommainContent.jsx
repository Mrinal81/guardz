import React from 'react'
import user from "../assets/user.png";
import globe from "../assets/globe.png";
import monitor from "../assets/monitor.png";


const data=[
    {
        number:0,
        title:"Critical",
        borderColor: "#b0284f",
    },
    {
        number:0,
        title:"High",
        borderColor: "#fc5281",
    },
    {
        number:2,
        title:"Medium",
        borderColor: "#f6ad55",
    },
    {
        number:0,
        title:"Low",
        borderColor: "#f6e266",
    },
  ]
const cardData=[
  {
    title:"No Email Security & Mmissing Records",
    description:"DNS records issue identified and email security not enabled.",
  },
  {
    title:"Poor Risk Rating",
    description:"Organization risk score is unusually low, please review issues & security controls.",
  },
  {
    title:"Schedule a Meeting",
    description:"Schedule a meeting with a Guardz Product Expert.",
  },
  {
    title:"Review User Licenses",
    description:"Visit the user management page for {email} to verify that all employees have the appropriate licenses and access levels in place.",
  },
 
]

const BottommainContent = () => {
  return (
    <div className='bottom-main-content'>
        <div className="bottommaincontent">
        <div className="bottomcard">
          <div className="bottom-card">
            <div className='issues'>
              <p>Coverage & Issues by Security Control</p>

            </div>
            <div></div>
          </div>
        </div>
        <div className="bottomstatus">
          <div className="bottom-content">
          <div className="details">
            <p>Issues By Risk (2)</p>
          </div>
          <div className="bottomstatusbar">
            <span></span>
          </div>
          <div className="values">

            {data.map((item,index) => {
                return (
                    <div className='bottom-values' key={index} style={{borderLeft: `5px solid ${item.borderColor}`}}>
                        <div className="datas">
                            <span>{item.number}</span>
                            <p>{item.title}</p>
                        </div>
                    </div>
                )
            })}

            
          </div>
          </div>
          <div className="insights">
            <div className="insights-content">
              <div className="insights-main-contents">
                <div className="insights-title">
                <p>Insights (5)</p>
                </div>
                <div className="insights-btns">
                <button>Security</button>
                <button>Tips</button>
                <button>Operations</button>
                </div>
                <div className="togglebtn">
                  <button>Ignored</button>
                </div>
              </div>

              <div className="scroll-content">
                <div className="scrollcards">
                  <div className="topcard">
                  <div className="icon">
                    <img src={globe} alt="icon" />
                  </div>
                  <div className="scrollcardcontent">
                    <h4>Cloud Directory Setup Required</h4>
                    <p>Sync your Cloud Directory to activate user protection and enable additional security controls for</p>
                  </div>
                  <div className="btns">
                    <button>Activate</button>
                  </div>
                  </div>

                  <div className="belowcard">
                    
                    {cardData.map((item,index) =>{
                      return(
                        <>
                        <div className="below-cards">
                              <div className="belowicon">
                                  <img src={monitor} alt="" />
                              </div>
                              <div className="belowcardcontent" key={index}>
                                  <h4>{item.title}</h4>
                                  <p>{item.description}</p>
                              </div>
                              <div className="arrowbtn">
                                <button>Swipe</button>
                              </div>
                              </div>
                        </>
                      )
                    
                    })}
                    
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottommainContent