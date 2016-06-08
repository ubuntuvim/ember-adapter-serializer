// app/components/user-form.js

import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);  //记得调用父类的构造方法
    //初始化日期控件
    Ember.$(".datepicker").datepicker({format:'yyyy-mm-dd', autoclose: true});
  }
});
