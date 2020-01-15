export function getInterviews() {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/interviews')
        .then(results => {
          return results.json();
        }).then(data => {
            dispatch(getAllInterviews(data))
        })
    }
}
const getAllInterviews= data => ({type : "GET_ALL_INTERVIEWS",data: data})