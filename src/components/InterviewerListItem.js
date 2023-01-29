import React from "react";

import "components/InterviewerListItem.scss"
import classNames from "classnames";

export default function InterviewListItem(props) {

  let interviewListClass = classNames("interviewers__item", {"interviewers__item--selected": props.selected})

  return (
    <li className={interviewListClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {formatSelected(props)}
    </li>
  );
}

function formatSelected(props) {
  if(props.selected) {
    return props.name;
  } else {
    return '';
  }
}