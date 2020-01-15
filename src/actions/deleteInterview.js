export function deleteInterview(id) {
  return dispatch => {
    let url = "http://localhost:3001/api/v1/interviews/" + id;
    return fetch(url, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    })
      .then(res => {
        if (res.json()) {
          dispatch(delete_interview(id));
        }
      }) // OR res.json()
      .then(res => console.log(res));
  };
}

const delete_interview = data => ({ type: "DELETE_INTERVIEW", data: data });
