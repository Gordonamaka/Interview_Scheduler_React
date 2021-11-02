export function getAppointmentsForDay(state, day) {
  let filteredDays = state.days.filter(thisDay => thisDay.name === day);
  if (filteredDays === [] || !day || filteredDays[0] === undefined) {
    return []
  }

  const { appointments } = filteredDays[0]

  const answer = []
  for (let appointment of Object.values(state.appointments)) {
    if (appointments.includes(appointment.id)) {
      answer.push(appointment)
    }
  }

  return answer;
}



/*


We need to start by finding the object in our state.days array who's name matches the provided day. With this information we can now access that specific days appointment array.

Once we have access to the appointment array for the given day, we'll need to iterate through it, comparing where it's id matches the id of states.appointments and return that value.

We should also probably do a bit of validation. If there are no appointments on the given day, our days data will be empty. According to our tests, in a case like this, we should return an empty array.


*/