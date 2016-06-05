import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    updateUser(user) {
      this.store.findRecord('user', user.get('id')).then((u) => {
        u.set('name', user.get('name'));
        u.set('addr', user.get('addr'));
        u.set('birth', user.get('birth'));
        u.set('addr', user.get('addr'));
        u.save();
      });
      this.transitionTo('users.list');
    }
  }
});
