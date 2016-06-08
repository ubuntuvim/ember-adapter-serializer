// app/adapters/application.js

import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
    host: 'http://localhost:3000',
    // namespace: 'api/v1',
    headers: {
		'API_KEY': 'secret key',
	    'ANOTHER_HEADER': 'Some header value'
	}
});
