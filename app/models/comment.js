// app/models/comment.js
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo,hasMany } from 'ember-data/relationships';

export default Model.extend({
    title: attr('string'),
    publicDate: attr('string'),
    content: attr('string'),
    user: belongsTo('user'),  //一对多关系，多的一方使用belongsTo
    post: belongsTo('post')
});
