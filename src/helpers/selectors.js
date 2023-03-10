export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const filteredDay = state.days.filter(days => days.name === day);
  const appointmentArray = [];

  if (filteredDay.length === 0) {
    return [];
  } else {
    filteredDay[0].appointments.map(id => appointmentArray.push(id));
  }

  const matchingAppointments = [];
  for (let i = 0; i < appointmentArray.length; i++) {
    matchingAppointments.push(state.appointments[appointmentArray[i]]);
  }

  return matchingAppointments;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  else {
    const interviewer = state.interviewers[interview.interviewer];

    return interview = {
      "student": `${interview.student}`,
      "interviewer": {
        "id": interviewer.id,
        "name": interviewer.name,
        "avatar": interviewer.avatar
      }
    }
  }
}

export function getInterviewersForDay(state, day) {
  //... returns an array of interviewers for that day
  const filteredDay = state.days.filter(days => days.name === day);
  const interviewerArray = [];

  if (filteredDay.length === 0) {
    return [];
  } else {
    filteredDay[0].interviewers.map(id => interviewerArray.push(id));
  }

  const matchingInterviewers = [];
  for (let i = 0; i < interviewerArray.length; i++) {
    matchingInterviewers.push(state.interviewers[interviewerArray[i]]);
  }

  return matchingInterviewers;
}