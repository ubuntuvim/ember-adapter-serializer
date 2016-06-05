// app/routes/users.js

import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      this.transitionTo('users.list');
    }
});
