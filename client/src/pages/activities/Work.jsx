import React from "react";

const Work = () => {
  const workInfoData = [
    {
      id: 3,
      image: './Assets/weboff.png',
      title: "WEB-OFF",
      text: "The Great Web-Off is a webdesign competition. The Prize Money is 15k BDT, Team Size- Flexible, Timeline 15 Sep- 24Sep",
      link: 'https://www.facebook.com/photo/?fbid=694666899367114&set=a.553298473503958',
    },
    {
      id: 2,
      image: './Assets/coding.png',
      title: "PROGRAMMING CONTEST",
      text: "Participate in the programming contest and win amazing prizes",
      link: 'https://www.facebook.com/photo/?fbid=678385977661873&set=a.553298473503958',
    },
    {
      id: 1,
      image: './Assets/flag.png',
      title: "CIPHER QUEST",
      text: "Join the cipher quest.Calling the tech enthusiastics.Get ready to embark on unforgotable journey. ",
      link: 'https://www.facebook.com/photo/?fbid=693413709492433&set=a.553298473503958',
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top" >
        <p className="primary-subheading">Events</p>
        <h1 className="primary-heading">Upcoming</h1>
        <p className="primary-text">
          Here is the upcoming exciting events of IUTCS. Register for the competitons and win exciting prizes
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <a href={data.link} target="_blank" rel="noopener noreferrer" key={data.title}>
            <div className="work-section-info" key={data.title} 
              data-aos="fade-down" data-aos-delay={data.id * 200} 
              data-aos-duration="200" data-aos-anchor-placement="top-center"
              >
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;