import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },
  actions: {
    saveUser(user) {
      user.save().then(() => {
        this.transitionTo('users.list');// 保存成功转到列表页面
      });
    }
  }
});
