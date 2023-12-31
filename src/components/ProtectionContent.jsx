import React, { useState } from 'react'
import cloud from "../assets/cloud.png";
import bootPrint from "../assets/boot-print.png";
import hacker from "../assets/hacker.png";
import phishing from "../assets/phishing.png";
import email from "../assets/email.png";
import folder from "../assets/folder.png";
import monitor from "../assets/monitor.png";
import completed from "../assets/completed.png"
import down from "../assets/down.png"


const data=[
  {
    title:"Cloud Directory Posture",
    description:"Track the security posture & activity of users (e.g. MFA & inactivity) and their mailbox rules (e.g. forwarding",
    button:"Activate",
    img:cloud,
    additionaldata: [
      {
        heading:"Primary Application"
      },
      {
        title:"Status",
        para:"No scan scheduled",
      },
      {
        title:"Active Users",
        para:"Only active users will be protected by Guardz. You can manage licenses here and in the users page."
      },
    ]

  },
  {
    title:"External Footprint scan",
    description:"Discover Domains, IPs, & exposed assets. The discovery domain is used to link associated domains and IPs to the asset list.",
    button:"Active",
    img:bootPrint,
    additionaldata: [
      {
        title:"Status",
        para:"Last scan: Dec 07, 2023",
      },
      {
        title:"Internet Assets",
        para:"Discovery Domain: deepdefend.tech",
        para2:"Domains: 2",
        para3:"IPS: 4",
      },
    ]
  },
  {
    title:"Dark Web Monitoring",
    description:"Search for leaked credentials and confidential data in the dark web.",
    button:"Active",
    img:hacker,
    additionaldata: [
      {
        title:"Status",
        para:"Last scan: Dec 11. 2023 01:41 am",
      },
      {
        title:"Scanned Domain",
        para:"deepdefend.tech"
      },
    ]
  },
  {
    title:"Cloud Data Protection",
    description:"Identify external exposure of files and folders and potential data exfiltration.",
    button:"Activate",
    img:folder,
    additionaldata: [
      {
        title:"Connected Applications",
        para:"No connected appliations",
      },
      {
        title:"Assets Allow List",
        para:"An asset is added to the allow list through the remediation process and will result in that asset being excluded from future issues."
      },
    ]
  },
  {
    title:"Email Protection",
    description:"Continuous monitoring of email, via organization-wide APIs, to detect threats such as Spam, Virus, Phishing, etc and take immediate action to quarantine the email or warn the users.",
    button:"Activate",
    img:email,
    additionaldata: [
      {
        title:"Status",
        para:"No scan scheduled",
      },
      {
        title:"Connected Email Application",
        para:"The connected application is continuously monitored.",
        para1:"No application connected."
      },
      {
        title:"Caution Banner & Quarantine",
        para:"Configure how suspicious emails are handled",
      },
      {
        title:"Manage Block List",
        para:"Adding a sender to the block list will result in your organization not receiving emails from them.",
      },
      {
        title:"Manage Allow List",
        para:"Adding a sender to the global allow list will result in that sender being excluded from future scanning or issues.",
      },
    ]
  },
  {
    title:"Endpoint Security",
    description:"Monitor device posture, manage Microsoft Defender policy settings and discover end-point threats in real-time to automate remediations and prevent issue escalation.",
    button:"Deploy",
    img:monitor,
    additionaldata: [
      {
        title:"Status",
        para:"No scan scheduled",
      },
      {
        title:"Deployment Status",
        para:"No active devices"
      },
      {
        title:"Microsoft Defender Policy Settings",
        para:"Configure and manage deployed AV policies"
      },
    ]
  },
  {
    title:"Secure Browsing",
    description:"The browser extension alerts on activity related to malicious sites, web redirects, and unsafe extensions.",
    button:"Deploy",
    img:completed,
    additionaldata: [
      {
        heading:"Primary Application"
      },
      {
        title:"Deployment Status",
        para:"No active browser extensions"
      },
    ]
  },
  {
    title:"Security Awareness Training",
    description:"Train employees on the latest cybersecurity best practices to create a first line of defense against attackers.",
    button:"Activate",
    img:email,
    additionaldata: [
      {
        title:"Status",
        para:"No awareness training campaigns",
      },
      {
        title:"Awarness Campaigns",
        para:"Go to the Awarreness Campaigns page"
      },
    ]
  },
  {
    title:"Phishing Simulations",
    description:"Use simulated phishing campaigns, generated by a creative AI tool, to test employees and help educate them on this common threat.",
    button:"Activate",
    img:phishing,
    additionaldata: [
      {
        title:"Status",
        para:"No phishing simulation campaigns",
      },
      {
        title:"Phishing Allowlist Domain",
        para:"Guardz uses a dedicated domain & IP to send phishing emails."
      },
      {
        title:"Phishing Simulation Campaigns",
        para:"Go to the Awareness Campaigns page."
      },
    ]
  },
]

const ProtectionContent = () => {
  const [expandCard, setExpandCard]=useState(null);

  const handleToggleExpand= (index) => {
    setExpandCard((prevIndex) => (prevIndex === index ? null : index));

  }
  let active=0;
  let inactive=0;
  let total=data.length;


  data.forEach((item) => {
    if (item.button.toLowerCase() === 'active') {
      active++;
    } else {
      inactive++;
    }
  });

  return (
    <div className='protection'>
      <div className="protection-content">
        <div className="protection-header">
          <div className="protection-left">
            <h3>Security Controls</h3>
            <p>Manage your organization's security controls</p>
          </div>
          <div className="protection-right">
            <ul className="protection-list">
              <li className='first'>
                <div className="protection-circle"></div>
                <div className="desc">
                  <span>22%</span>
                  <p>Controls Activated</p>
                </div>
                
              </li>
              <li>
                <span>{total}</span>
                <p>Security Controls</p>
              </li>
              <li>
                <span>{active}</span>
                <p>Active</p>
              </li>
              <li>
                <span>{inactive}</span>
                <p>Inactive</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="protection-scroll">
          <div className="protection-items">
            {data.map((item, index) => (
              <>
              
              <div className="protection-scroll-list" key={index}>
                <div className="scroll-data">
                <div className="scroll-list-left">
                  <div className={item.button.toLowerCase() === 'active' ? 'active-img' : 'protection-list-img'}>
                    
                  <img src={item.img} alt="icon" />
                  </div>
                  <div className="middle-scroll-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="scroll-list-right">
                <button className={item.button.toLowerCase() === 'active' ? 'active-button' : ''}>{item.button}</button>
                  <img src={down} alt="drop" onClick={() => handleToggleExpand(index)} className={`expand-icon ${expandCard === index ? 'expandes' : ''}`} />
                </div>
                </div>
              {expandCard === index && (
                <>
                  <div className="expanded-content">
                    <div className="expanded-content-card">
                      {item.additionaldata.map((item,index) => {
                        return(
                          <div className="additional-list">
                            <div className="additional-list-heading">
                            <h4>{item.heading}</h4>
                            </div>
                            <div className="additional-data-title">
                            <h4>{item.title}</h4>
                            <p>{item.para}</p>  
                            <p>{item.para2}</p>  
                            <p>{item.para3}</p>  
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  </>
                )}
              </div>
                </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProtectionContent