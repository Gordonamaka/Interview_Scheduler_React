export function getAppointmentsForDay(state, day) {
  let filteredDays = state.days.filter((thisDay) => thisDay.name === day);

  if (filteredDays === [] || !day || filteredDays[0] === undefined) {
    return [];
  }

  const { appointments } = filteredDays[0];

  const answer = [];

  for (let appointment of Object.values(state.appointments)) {
    if (appointments.includes(appointment.id)) {
      answer.push(appointment);
    }
  }

  return answer;
}

export function getInterviewersForDay(state, day) {
  if (state.days.length < 1) return [];

  const filteredDays = state.days.find((d) => d.name === day);
  if (!filteredDays) return [];

  const interviews = [];
  for (const interview of filteredDays.interviewers) {
    interviews.push(state.interviewers[interview]);
  }
  return interviews;
}

export function getInterview(state, day) {
  if (!day || !day.interviewer) {
    return null;
  } else {
    return {
      ...day,
      interviewer: state.interviewers[day.interviewer],
    };
  }
}
