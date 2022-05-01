/* emilien <emilien@emilien-lx>, 2021 */

import { FC } from 'react';
import { Head } from 'next/document';
import GlobalStyles from '@/components/GlobalStyles';
import '@/assets/globals.css';
import { wrapper } from '@/src/store';

/* TODO: This was used as a local mocking server, but is currently outdated
import { makeServer } from '@/src/mirage_mocking';
if (process.env.NODE_ENV === 'development') {
	makeServer({ environment: 'development' });
}
*/

const WrappedApp: FC<any> = ({ Component, pageProps }) => (
	<>
		<GlobalStyles />
		<Component {...pageProps} />
	</>
);

export default wrapper.withRedux(WrappedApp);
