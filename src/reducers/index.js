import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{title: 'No Scrubs', duration: '4:05'},
		{title: 'Makarena', duration: '1:53'},
		{title: 'AllStar', duration: '2:10'},
		{title: 'Gorky Park', duration: '3:45'},
	]
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songsReducer,
	selectedSongReducer
});
