// app/models/tag.js
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo,hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  posts: hasMany('post')
});
