import React, { Component } from "react";
import myImage from "../img/myImage.png";

class About extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", percentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", percentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "90%",
          value: "90"
        },
        { id: "Java_skill", content: "Java", percentage: "80%", value: "80" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          percentage: "75%",
          value: "75"
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          percentage: "90%",
          value: "90"
        },
        {
          id: "C++_skill",
          content: "C++",
          percentage: "75%",
          value: "75"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm a 4th year undergraduate student at Vellore Institute of Technology(VIT), Vellore pursuing my B.Tech in Computer Science and Engineering."
        },
        {
          id: "second-p-about",
          content:
            "I've experience on working with many technologies. I've done few projects in Web Development and have keen interest in Data Science too.I'm always looking for opportunities to improve my skills and learn new skills along the way!"
        }

      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
