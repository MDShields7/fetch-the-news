const initialState = {
host: '',             // Host - only assigned from laptop view
room: '',             // Typed by host
rndLimit: 3,          // Round, set by host in lobby
rndCurrent: null,     // Round, set during game
user: '',             // User { id:#, avName:'', avPhoto:'url' }
userList: [],         // List of playing users 
userScoreList: [],    // Scores - only party mode
newsAllList: [],      // Lists available to play
newsPlayingList: [],  // List played in party mode

avatarList: [],       // Hard-coded items
}
const UPDATE_HOST = 'UPDATE_HOST';
const UPDATE_ROOM = 'UPDATE_ROOM';
const UPDATE_RND_LIMIT = 'UPDATE_RND_LIMIT';
const UPDATE_RND_CURRENT = 'UPDATE_RND_CURRENT';
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_USER_LIST = 'UPDATE_USER_LIST';
const UPDATE_USER_SCORE_LIST = 'UPDATE_USER_SCORE_LIST';
const UPDATE_NEWS_ALL_LIST = 'NEWS_ALL_LIST';
const UPDATE_NEWS_PLAYING_LIST = 'NEWS_PLAYING_LIST';

function reducer( state = initialState, action){
  switch(action.type){      
      case UPDATE_HOST:
          return Object.assign({},state, {host: action.payload})
      case UPDATE_ROOM:
          return Object.assign({},state, {room: action.payload})
      case UPDATE_RND_LIMIT:
          return Object.assign({},state, {rndLimit: action.payload}) 
      case UPDATE_RND_CURRENT:
          return Object.assign({},state, {rndCurrent: action.payload})  
      case UPDATE_USER:
          return Object.assign({}, state, {user: action.payload})
      case UPDATE_USER_LIST:
          return Object.assign({}, state, {userList: action.payload}) 
      case UPDATE_USER_SCORE_LIST:
          return Object.assign({}, state, {userScoreList: action.payload}) 
      case UPDATE_NEWS_ALL_LIST:
          return Object.assign({}, state, {newsAllList: action.payload}) 
      case UPDATE_NEWS_PLAYING_LIST:
          return Object.assign({}, state, {newsPlayingList: action.payload}) 
      default: return state;
  } 
}
export function updateHost ( host ){
  return {
      type: UPDATE_HOST,
      payload: host
  }
}
export function updateRoom ( room ){
  return {
      type: UPDATE_ROOM,
      payload: room
  }
}
export function updateRndLimit ( rndLimit ){
  return {
      type: UPDATE_RND_LIMIT,
      payload: rndLimit
  }
}
export function updateLoanType ( rndCurrent ){
  return {
      type: UPDATE_RND_CURRENT,
      payload: rndCurrent
  }
}
export function updateUser ( user ){
  return {
      type: UPDATE_USER,
      payload: user
  }
}
export function updateUserList ( userList ){
  return {
      type: UPDATE_USER_LIST,
      payload: userList
  }
}
export function updateUserScoreList ( userScoreList ){
  return {
      type: UPDATE_USER_SCORE_LIST,
      payload: userScoreList
  }
}
export function updateNewsAllList ( newsAllList ){
  return {
      type: UPDATE_NEWS_ALL_LIST,
      payload: newsAllList
  }
}
export function updateNewsPlayingList ( newsPlayingList ){
  return {
      type: UPDATE_NEWS_PLAYING_LIST,
      payload: newsPlayingList
  }
}

export default reducer;