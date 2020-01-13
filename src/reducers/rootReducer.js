const initState = {
    interviews: []
}

const rootReducer = (state = initState,action) => {
    if(action.type === 'GET_ALL_INTERVIEWS'){

    return {
        ...state,
        interviews : action.data
    }
    }else if(action.type ==='NEW_INTERVIEW') {
        let newInterviews =state.interviews.push(action.data);
        return {
            ...state,
            interviews : newInterviews
        }
    }else if(action.type ==='EDIT_INTERVIEW') {
        let newInterviews =state.interviews.filter(interview => interview.id.toString() !== action.data.id.toString()).push(action.data);
        return {
            ...state,
            interviews : newInterviews
        }
    }else if(action.type ==='DELETE_INTERVIEW') {
        let newInterviews =state.interviews.filter(interview => interview.id.toString() !== action.data.toString());
        return {
            ...state,
            interviews : newInterviews
        }
    }
    return state;
}


export default rootReducer;