import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Martin Fowler', 'Addy Osmani', 'Yehouda Katz'];
  }
});
