import Route from '@ember/routing/route';

export default Route.extend({
  // make default page `/fruit-machine`
  beforeModel() {
    this.replaceWith('fruit-machine')
  }
});
