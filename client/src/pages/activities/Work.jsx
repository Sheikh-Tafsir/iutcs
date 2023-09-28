import React from "react";

const Work = () => {
  const workInfoData = [
    {
      image: './Assets/weboff.png',
      title: "WEB-OFF",
      text: "The Great Web-Off is a webdesign competition. The Prize Money is 15k BDT, Team Size- Flexible, Timeline 15 Sep- 24Sep",
    },
    {
      image: './Assets/coding.png',
      title: "PROGRAMMING CONTEST",
      text: "Participate in the programming contest and win amazing prizes",
    },
    {
      image: './Assets/flag.png',
      title: "CIPHER QUEST",
      text: "Join the cipher quest.Calling the tech enthusiastics and adventure seekers.Get ready to embark on unforgotable journey. ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Events</p>
        <h1 className="primary-heading">Upcoming</h1>
        <p className="primary-text">
          Here is the upcoming exciting events of IUTCS. Register for the competitons and win exciting prizes
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;