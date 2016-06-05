import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('users', function() {
    this.route('new');
    this.route('list');
    this.route('edit', { path: '/:user_id' });
  });
  this.route('comments');
});

export default Router;
