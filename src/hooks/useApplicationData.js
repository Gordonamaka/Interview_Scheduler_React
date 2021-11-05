import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  //May be converted into async function
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    //ensure our saved data is not lost.
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      const days = spotsRemaining(state, appointments);
      setState((prev) => ({ ...prev, days, appointments }));
    });
  }
  //May be converted into async function
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      const days = spotsRemaining(state, appointments);
      setState((prev) => ({ ...prev, days, appointments }));
    });
  }
  function spotsRemaining(state, appointments) {
    let total = 0;
    const filteredDay = state.days.find((d) => d.name === state.day);

    for (const item of filteredDay.appointments) {
      if (appointments[item].interview === null) total++;
    }
    const updatedDay = {
      ...filteredDay,
      spots: total,
    };
    const days = state.days.map((day) =>
      day.id === filteredDay.id ? updatedDay : day
    );
    return days;
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
