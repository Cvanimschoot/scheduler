import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  // State manages the information for each "day"
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day })

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => setState({ ...state, appointments }), updateSpots(state, state.day, appointments))
  }

  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState({ ...state, appointments }), updateSpots(state, state.day, appointments))

  }

  // Used to live update the spots as changes are made in cancelInterview and bookInterview. Otherwise spots are only updated after refresh.
  function updateSpots(state, day, appointments) {
    let count = 0;
    const filteredDay = state.days.filter(days => days.name === day);
    const filteredAppointments = filteredDay[0].appointments;

    for (const appointmentKey in filteredAppointments) {
      if (!appointments[filteredAppointments[appointmentKey]].interview) {
        count += 1;
      }
    }

    state.days.map(days => {
      if (days.name === day) {
        days.spots = count;
      }
      return ('Count changed');
    });

    return count;
  }

  // Axios request to pull all the information into the project before webpage load
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  return { state: state, setDay, bookInterview, cancelInterview }
};