/* emilien <emilien@emilien-lx>, 04/2021 */

import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props =>
						sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="application-name"
						content="PWMail, a pwa mail client"
					/>
					<title>Mail PWA</title>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
					<meta name="apple-mobile-web-app-title" content="PWMail" />
					<meta
						name="description"
						content="An offline capable web based mail client"
					/>
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta
						name="msapplication-config"
						content="/browserconfig.xml"
					/>
					<meta name="msapplication-tap-highlight" content="no" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/manifest.json" />
					<link
						rel="mask-icon"
						href="/safari-pinned-tab.svg"
						color="#40015e"
					/>
					<meta name="msapplication-TileColor" content="#1b0149" />
					<meta name="theme-color" content="#ffffff" />
					<meta name="twitter:card" content="summary" />
					{/*<meta name="twitter:url" content="https://yourdomain.com" />*/}
					<meta name="twitter:title" content="PWA Mail App" />
					<meta
						name="twitter:description"
						content="An offline capable web based mail client"
					/>
					<meta
						name="twitter:image"
						content="https://yourdomain.com/static/icons/android-chrome-192x192.png"
					/>
					<meta name="twitter:creator" content="@PWMail" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="PWMail" />
					<meta
						property="og:description"
						content="An offline capable web based mail client"
					/>
					<meta property="og:site_name" content="PWMail" />
					<meta property="og:url" content="https://yourdomain.com" />
					<meta
						property="og:image"
						content="https://yourdomain.com/static/icons/apple-touch-icon.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
