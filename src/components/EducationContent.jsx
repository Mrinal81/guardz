import React from 'react'
import phishing from "../assets/phishing-email.png";
import video from "../assets/video.png";


const data=[
  {
    span1:"#phishing",
    span2:"#simulation",
    title:"Phishing Simulation",
    img:phishing,
    para:"Generate AI",
    btn:"Create"
  },
  {
    span1:"#compliance",
    title:"Compliance - PHI",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#compliance",
    title:"Compliance - HIPAA",
    img:video,
    para:"3 Videos",
    btn:"Open"
  },
  {
    span1:"#ransomware",
    title:"Ransomware",
    img:video,
    para:"3 Videos",
    btn:"Open"
  },
  {
    span1:"#passwords",
    span2:"#online gaming",
    title:"Family Safety #1",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#phishing",
    span2:"#social engineering",
    title:"Social Engineering #1",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#fraud",
    span2:"#wire fraud",
    title:"Financial Fraud",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#insider",
    span2:"#threat",
    title:"Insider Threats #1",
    img:video,
    para:"3 Videos",
    btn:"Open"
  },
  {
    span1:"#pii",
    span2:"#hardware",
    title:"Data Handling",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#cooprate dafety",
    title:"Corporate Scams",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#personal safety",
    title:"Safe Online Shopping",
    img:video,
    para:"1 Videos",
    btn:"Open"
  },
  {
    span1:"#chatgpt",
    span2:"#privacy",
    title:"Privacy",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#personal safety",
    title:"Email",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#corporate safety",
    title:"Leadership",
    img:video,
    para:"3 Videos",
    btn:"Open"
  },
  {
    span1:"#compliance",
    title:"Compliance 101",
    img:video,
    para:"3 Videos",
    btn:"Open"
  },
  {
    span1:"#government",
    span2:"#phishing",
    title:"Government Attacks",
    img:video,
    para:"3 Videos",
    btn:"Open"
  },
  {
    span1:"#mobile",
    title:"Mobile Security",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#personal safety",
    span2:"#corporate",
    title:"Onboarding",
    img:video,
    para:"3 Videos",
    btn:"Open"
  },
  {
    span1:"#wire fraud",
    title:"Wire Fraud",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#personal safety",
    title:"Personal Safety #1",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#personal safety",
    title:"Personal Safety #2",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#personal safety",
    title:"Personal Safety #3",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#phishing",
    title:"Phishing #1",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#phishing",
    title:"Phishing #2",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#phishing",
    title:"Phishing #3",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#mfa",
    span2:"#passwords",
    title:"Passwords and MFA",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#software",
    title:"Software Security",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
  {
    span1:"#corporate safety",
    title:"Corporate Safety #1",
    img:video,
    para:"3 Videos",
    btn:"Open"
  },
  {
    span1:"#corporate safety",
    title:"Corporate Safety #2",
    img:video,
    para:"2 Videos",
    btn:"Open"
  },
]


const EducationContent = () => {

    const totalCampaigns = data.length;


  return (
    <div className='education'>
      <div className="education-content">
        <h3>Available Campaigns ({totalCampaigns})</h3>
        <div className="education-function">
          <div className="upper-btn">
            <button><svg className='search-img' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg></button>
            <button className='filter'>Filter</button>
          </div>
          <div className="lower-btn">
            <span>Language |<button className='lang'>English</button></span>
            <button className='clear'>Clear All</button>
          </div>
        </div>
        <div className="education-card">
        <div className="columns">
            {data.map((item, index) => (
              <>
              <div className={`edu-card1 ${index === 0 ? 'dashed-border' : ''}`} key={index}>
                <div className="upper-part1">
                  <span>{item.span1}</span>
                  <span>{item.span2}</span>
                  <h3>{item.title}</h3>
                  <div className="card-img1">
                    <img src={item.img} alt="video" className='edu-card-img1' />
                    <p>{item.para}</p>
                  </div>
                </div>
                <div className="edu-below-btn1">
                  <h4 style={{ color: index === 0 ? '#654FE8' : '' }}>{item.btn}</h4>
                </div>
              </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationContent