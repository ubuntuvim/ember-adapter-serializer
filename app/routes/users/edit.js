// app/routes/users/edit.js

import Ember from 'ember';

export default Ember.Route.extend({
  // 根据ID查询
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
        u.save();  //保存修改的属性值
      });
      this.transitionTo('users.list');  //转到列表页面
    }
  }
});
