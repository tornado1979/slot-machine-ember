import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';


module('Acceptance | fruit machine app', (hooks) => {
  setupApplicationTest(hooks);

  test('should show `/fruit-machine` as home page' , async (assert) => {
    await visit('/');
    assert.equal(currentURL(), '/fruit-machine');
  });
  test('should link to the about page', async (assert) => {
    await visit('/');
    await click(".about");
    assert.equal(currentURL(), '/about', 'should navigate to the about page')
  })
});
