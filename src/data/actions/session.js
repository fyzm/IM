<<<<<<< HEAD
import {SET_CURRENT_SESSION, GET_ROSTERS, createAction} from './actiontypes';

export let setCurrentSession = createAction(SET_CURRENT_SESSION, 'session');
export let setRosters = createAction(GET_ROSTERS, 'rosters');
export function getRosters() {
=======
import {SET_CURRENT_SESSION, SET_ROSTERS, createAction} from './actiontypes';

export let setCurrentSession = createAction(SET_CURRENT_SESSION, 'session');
export let setRosters = createAction(SET_ROSTERS, 'rosters');



export function getRosters() {
    //.....
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            sdk.conn.getRoster({
                success: (rosters) => {
                    rosters = rosters.filter((roster) => {
                        return roster.subscription === 'both';
                    });
<<<<<<< HEAD
    
                    // this.setState({
                    //     friendList: rosters
                    // });
                    dispatch(setRosters(rosters))
                    resolve(rosters);
                },
                error: (e) => {
                    //alert(e);
=======
                    dispatch(setRosters(rosters));
                    console.log(rosters);
                    resolve(rosters);
                },
                error: (e) => {
>>>>>>> 0fe259661d5ed4934647c76e754da14a7e3c2b8e
                    reject(e);
                }
            });
        });
        
    }
}
    


export function changeRosterWithMsg(msg) {

    return (dispatch, getState) => {
        let name = msg.body ? msg.body.to :  msg.from;
        let rosters = getState().session.rosters;
        let newRosters = rosters.map((roster) => {
            let newRoster = {...roster};
            if (roster.name === name) {
                newRoster.message = msg;
            }
            return newRoster;
        })

        dispatch(setRosters(newRosters));
    }

    
    
}