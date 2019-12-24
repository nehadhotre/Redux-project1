import{ combineReducers}from "redux";
const songList =()=>{
    return [{
        id:1,
        name:"senorita",
        duration:"4"
    },
    {
        id:2,
        name:"let me love you",
        duration:"4.30"
    },
    {
        id:3,
        name:"see you again",
        duration:"5"
    }
]
};
const ListDetails=(song=null,action)=>{
switch (action.type){
    case "SELECTED-SONG":
        return action.payload;
        default:
            return song;
}
};

const reducers=combineReducers({Songlist:songList,details:ListDetails});
export default reducers;