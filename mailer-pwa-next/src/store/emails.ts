/* emilien <emilien@emilien-lx>, 2021 */

import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { AppState } from './';
import { HYDRATE } from 'next-redux-wrapper';
import { fetchEmails } from '@/src/api';

const hydrate = createAction<AppState>(HYDRATE);

const initialState: {
	mailList: any;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
} = {
	mailList: [],
	status: 'idle',
	error: null,
};

export const fetchMailList = createAsyncThunk(
	'emails/fetchMailList',
	async ({ id }) => await fetchEmails({ id }),
);

export const emailsSlice = createSlice({
	name: 'emails',
	initialState,

	reducers: {
		setMailList(state, action) {
			return {
				...state,
				mailList: action.payload,
			};
		},
	},

	extraReducers(builder) {
		builder
			.addCase(hydrate, (state, action) => {
				console.log('HYDRATE', state, action.payload);
				return {
					...state,
					...(action.payload as any)[emailsSlice.name],
				};
			})
			.addCase(fetchMailList.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchMailList.fulfilled, (state, { payload }) => {
				return { ...state, status: 'succeeded', mailList: payload };
			})
			.addCase(fetchMailList.rejected, (state, { payload }) => {
				return { ...state, status: 'failed' };
			});
	},
});

export const { setMailList } = emailsSlice.actions;

export const getMailList = ({ emails }) => emails.mailList;
export const getMailStatus = ({ emails }) => emails.status;
