/* emilien <emilien@emilien-lx>, 2021 */

import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

/** Imported reducers */
import { emailsSlice } from './emails';
import { userSlice } from './user';

const makeStore = () =>
	configureStore({
		reducer: {
			[emailsSlice.name]: emailsSlice.reducer,
			[userSlice.name]: userSlice.reducer,
		},
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;


export const wrapper = createWrapper<AppStore>(makeStore);
