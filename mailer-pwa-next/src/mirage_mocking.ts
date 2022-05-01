/* emilien <emilien@emilien-lx>, 2021 */

import { createServer } from 'miragejs';

interface ImakeServer {
	environment: string;
}

export function makeServer({ environment = 'test' }: ImakeServer) {
	return createServer({
		environment,

		routes() {
			this.namespace = 'api';

			this.get('emails', () => [
				{
					id: 1,
					author: 'Emilien Jégou',
					title: 'New week at the office! Great!',
					time: '12:38pm',
					description:
						'Cras nisl magna, hendrerit id ultrices at,' +
						'fermentum non nibh. Donec bibendum quam...',
					newMail: true,
				},
			]);

			this.get('email', id => ({
				id: 1,
				author: 'Emilien Jégou',
				title: 'New week at the office! Great!',
				time: '12:38pm',
				content: [
					'Hello Emilien!',
					'',
					'Just wanted to which you a good week at the office!',
					'',
					'Yours trully,',
					'Jhon Doe',
				].join('\n'),
			}));
		},
	});
}
