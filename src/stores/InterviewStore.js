import { observable, action, computed } from "mobx";

class InterviewStore {
  @observable interviews = [];
  //  fetch all the interviews
  @action fetchInterviews = () => {
    fetch("http://localhost:3001/api/v1/interviews")
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);
        this.interviews = data;
      });
  };

  // Create an interview
  @action createInterview = (date, start, end, title, participants) => {
    let data = JSON.stringify({
      date: date,
      start: start,
      end: end,
      title: title,
      participantlist: participants
    });
    let url = "http://localhost:3001/api/v1/interviews/";
    fetch(url, {
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
          // actually create interview in store
          this.interviews.push(data);
          alert("The Interview is created");
        }
      })
      .catch(error => {
        alert("Error:", error);
      });
  };
  //   Delete an Interview
  @action deleteInterview = id => {
    let url = "http://localhost:3001/api/v1/interviews/" + id;
    fetch(url, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    })
      .then(res => {
        console.log(res.json());
        // actually delete the interview from store
        this.interviews.filter(
          interview => interview.id.toString() !== id.toString()
        );
      }) // OR res.json()
      .then(res => console.log(res));
  };

  //   Edit an interview
  @action editInterview = (id, date, start, end, title, participants) => {
    let data = JSON.stringify({
      date: date,
      start: start,
      end: end,
      title: title,
      participantlist: participants
    });
    let url = "http://localhost:3001/api/v1/interviews/" + id;
    fetch(url, {
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
          this.interviews
            .filter(interview => interview.id.toString() !== id.toString())
            .push(data);
          //   dispatch(editInterview(data));
          alert("The Interview is updated");
        }
      });
  };
}

const store = new InterviewStore();
export default store;
