/* emilien <emilien@emilien-lx>, 2021 */

import { createSlice, createAction } from '@reduxjs/toolkit';
import { AppState } from './';
import { HYDRATE } from 'next-redux-wrapper';

const hydrate = createAction<AppState>(HYDRATE);

interface IUserData {
	id: string;
	name: string;
	mail: string;
	mail_provider: string;
}

const initialState: {
	userData: IUserData | null;
} = {
	userData: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		setUserData(state, action) {
			_set('userData', action.payload);
			return {
				...state,
				userData: action.payload,
			};
		},
	},

	extraReducers(builder) {
		builder.addCase(hydrate, (state, action) => {
			console.log('HYDRATE', state, action.payload);
			return {
				...state,
				...(action.payload as any)[emailsSlice.name],
			};
		});
	},
});

export const { setUserData } = userSlice.actions;

export const getUserData = ({ user }) => user.userData;
