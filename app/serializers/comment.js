// app/serializers/comment.js

import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
    attrs: {
        // renameAttr: { key: 'title' },
        flag: { transient: false },
        publicDate: { serialize: false }
    }
});
