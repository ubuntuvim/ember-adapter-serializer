// app/models/user.js

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo,hasMany } from 'ember-data/relationships';

export default Model.extend({
    name: attr('string'),
    password: attr('string'),
    birth: attr('string'),
    addr: attr('string'),
    //一对多关系，一的一方设置hasMay，多的一方设置belongsTo
    comments: hasMany('comment'),
    posts: hasMany('post')
});
