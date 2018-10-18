/**
 * Created by Jeffr on 7/17/2017.
 */
import { combineReducers } from 'redux'

const mmonReducer = (state={mon:[
    {hour: 7, closed: false},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: false},
    {hour: 19, closed: false},
    {hour: 20, closed: false},
    {hour: 21, closed: false},
    {hour: 22, closed: false},
    {hour: 23, closed: false},
    {hour: 24, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGEM":
            return {...state, mon:action.state}
        case "CHANGE_HOUR_M":
            let shift_index = 0
            var newShift = {}
            state.mon.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        console.log(action.available)
                        shift_index = shift.hour - 7
                        // newShift = shift: {...shift, available: action.available, changed: !action.changed}}}
                    }
                }
            )
            let mon_array = []
            state.mon.map((shift) => mon_array.push({...shift}))
            mon_array[shift_index] = {available: action.available, hour: shift_index + 7, changed: !action.changed}
            console.log(mon_array)
            return {...state, mon: mon_array}
        // return {...state, mon[action.hour-7]:{...mon[action.hour-7], available: action.available, changed: action.changed}}
        default:
            return {...state}
    }
}

const mtuesReducer = (state={tues:[
    {hour: 7, closed: false},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: false},
    {hour: 19, closed: false},
    {hour: 20, closed: false},
    {hour: 21, closed: false},
    {hour: 22, closed: false},
    {hour: 23, closed: false},
    {hour: 24, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGET":
            return {...state, tues:action.state}
        case "CHANGE_HOUR_T":
            let arr = []
            state.tues.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, tues: arr}
        default:
            return {...state}
    }
}

const mwedReducer = (state={wed:[
    {hour: 7, closed: false},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: false},
    {hour: 19, closed: false},
    {hour: 20, closed: false},
    {hour: 21, closed: false},
    {hour: 22, closed: false},
    {hour: 23, closed: false},
    {hour: 24, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGEW":
            return {...state, wed:action.state}
        case "CHANGE_HOUR_W":
            let arr = []
            state.wed.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, wed: arr}
        default:
            return {...state}
    }
}

const mthursReducer = (state={thurs:[
    {hour: 7, closed: false},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: false},
    {hour: 19, closed: false},
    {hour: 20, closed: false},
    {hour: 21, closed: false},
    {hour: 22, closed: false},
    {hour: 23, closed: false},
    {hour: 24, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGER":
            return {...state, thurs:action.state}
        case "CHANGE_HOUR_R":
            let arr = []
            state.thurs.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, thurs: arr}
        case "change_availability_thurs":
            return {...state, thurs:action.thurs}

        default:
            return {...state}
    }
}

const mfriReducer = (state={fri:[
    {hour: 7, closed: false},
    {hour: 8, closed: false},
    {hour: 9, closed: false},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: true},
    {hour: 18, closed: true},
    {hour: 19, closed: true},
    {hour: 20, closed: true},
    {hour: 21, closed: true},
    {hour: 22, closed: true},
    {hour: 23, closed: true},
    {hour: 24, closed: true}
]}, action) => {
    switch(action.type) {
        case "CHANGEF":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.fri[i], available:action.state[i].available})
            }

            return {...state, fri:arrs}
        case "CHANGE_HOUR_F":
            let arr = []
            state.fri.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, fri: arr}
        case "change_availability_fri":
            return {...state, fri:action.fri}
        default:
            return {...state}
    }
}

const msatReducer = (state={sat:[
    {hour: 7, closed: true},
    {hour: 8, closed: true},
    {hour: 9, closed: true},
    {hour: 10, closed: false},
    {hour: 11, closed: false},
    {hour: 12, closed: false },
    {hour: 13, closed: false},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false},
    {hour: 17, closed: true},
    {hour: 18, closed: true},
    {hour: 19, closed: true},
    {hour: 20, closed: true},
    {hour: 21, closed: true},
    {hour: 22, closed: true},
    {hour: 23, closed: true},
    {hour: 24, closed: true}
]}, action) => {
    switch(action.type) {
        case "CHANGES":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.sat[i], available:action.state[i].available})
            }

            return {...state, sat:arrs}
        case "CHANGE_HOUR_S":
            let arr = []
            state.sat.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, sat:arr}
        case "change_availability_sat":
            return {...state, sat:action.sat}
        default:
            return {...state}
    }
}
const msunReducer = (state={sun:[
    {hour: 7, closed: true},
    {hour: 8, closed: true},
    {hour: 9, closed: true},
    {hour: 10, closed: true},
    {hour: 11, closed: true},
    {hour: 12, closed: true },
    {hour: 13, closed: true},
    {hour: 14, closed: false},
    {hour: 15, closed: false},
    {hour: 16, closed: false },
    {hour: 17, closed: false},
    {hour: 18, closed: false},
    {hour: 19, closed: false},
    {hour: 20, closed: false},
    {hour: 21, closed: false},
    {hour: 22, closed: false},
    {hour: 23, closed: false},
    {hour: 24, closed: false}
]}, action) => {
    switch(action.type) {
        case "CHANGEU":
            let arrs = []
            for (var i = 0; i < action.state.length; i++) {
                arrs.push({...state.sun[i], available:action.state[i].available})
            }
            return {...state, sun:arrs}
        case "CHANGE_HOUR_U":
            let arr = []
            state.sun.map(
                (shift) => {
                    if (shift.hour == action.hour) {
                        arr.push({...shift, available:action.available, changed:!action.changed})
                    } else {
                        arr.push({...shift})
                    }
                }
            )
            return {...state, sun: arr}
        case "change_availability_sun":
            return {...state, sun:action.sun}
        default:
            return {...state}
    }
}



const activeShiftReducer = (state={dayname:"",hour:{hour: 0}, closed:true, p1:[], p2:[], p3:[], p4:[], schedule:[""], open:false}, action) => {
    switch(action.type) {
        case "SHIFT_SELECTED":
            return {...state, p1:action.p1, p2:action.p2, p3:action.p3, p4:action.p4, schedule:action.schedule, open:action.open, hour:action.hour, dayname:action.dayname}
        case "CLOSE_MODAL":
            return {...state, open:action.open}
        case "TOGGLE_SCHEDULED":
            let new_schedule = []
            if (state.schedule.includes(action.netid)) {
                new_schedule = state.schedule.filter(x => x != action.netid)
            }
            else {
                new_schedule = (state.schedule).slice()
                new_schedule.push(action.netid)
            }
            return {...state, schedule: new_schedule}
        default:
            return state
    }

}

export default combineReducers({
    activeShiftReducer, mmonReducer, mtuesReducer, mwedReducer, mthursReducer, mfriReducer, msatReducer, msunReducer
})

