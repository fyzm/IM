import {SET_CURRENT_SESSION, GET_ROSTERS, createAction} from './actiontypes';

export let setCurrentSession = createAction(SET_CURRENT_SESSION, 'session');
export let setRosters = createAction(GET_ROSTERS, 'rosters');
export function getRosters() {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            sdk.conn.getRoster({
                success: (rosters) => {
                    rosters = rosters.filter((roster) => {
                        return roster.subscription === 'both';
                    });
    
                    // this.setState({
                    //     friendList: rosters
                    // });
                    dispatch(setRosters(rosters))
                    resolve(rosters);
                },
                error: (e) => {
                    //alert(e);
                    reject(e);
                }
            });
        });
        
    }
}
    


export function changeRoster() {
    
}