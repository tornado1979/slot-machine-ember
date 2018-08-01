import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fruit-machine', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fruit-machine');
    assert.ok(route);
  });
});
