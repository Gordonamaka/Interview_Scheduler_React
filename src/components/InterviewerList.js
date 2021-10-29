import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";


export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => (
  <InterviewerListItem
    key={props.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    selected={interviewer.name === props.id}
    setInterviewer={props.setInterviewers}
  />
  ))


  return (

    <section className="interviewers"
    
    >
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>

  )
}