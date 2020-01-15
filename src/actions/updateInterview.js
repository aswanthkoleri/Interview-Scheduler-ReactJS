export function updateInterview(id, date, start, end, title, participants) {
  return dispatch => {
    let data = JSON.stringify({
      date: date,
      start: start,
      end: end,
      title: title,
      participantlist: participants
    });
    let url = "http://localhost:3001/api/v1/interviews/" + id;
    return fetch(url, {
      method: "PUT",
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
          dispatch(editInterview(data));
          alert("The Interview is updated");
        }
      })
      .catch(error => {
        alert("Error:", error);
      });
  };
}

const editInterview = data => ({ type: "EDIT_INTERVIEWS", data: data });
