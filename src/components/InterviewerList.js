import React from "react";

import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  
  const interviewers = props.interviewer.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id} 
        name={interviewer.name} 
        avatar={interviewer.avatar}
        selected={interviewer.id === props.id} />
    )
  });

  return (
    <ul>
      {interviewers}
    </ul>
  )
}