export function createInterviewAction(date, start, end, title, participants) {
  return dispatch => {
    let data = JSON.stringify({
      date: date,
      start: start,
      end: end,
      title: title,
      participantlist: participants
    });
    let url = "http://localhost:3001/api/v1/interviews/";
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(response => response.json())
      .then(data => {
        if (data.code === 3000) {
          alert("There is an overlap in date and time");
        } else {
          dispatch(newInterview(data));
          alert("The Interview is created");
        }
      })
      .catch(error => {
        alert("Error:", error);
      });
  };
}

const newInterview = data => ({ type: "NEW_INTERVIEWS", data: data });
