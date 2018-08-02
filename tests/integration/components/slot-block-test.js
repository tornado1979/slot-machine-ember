import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | slot-block', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    
    const img = 'some image'
    const slot= 'slot'
    const fruitName = 'a name'

    await render(hbs`{{slot-block img=img  slot=slot fruitName=fruitName}}`);

    assert.equal(this.element.textContent.trim(), 'ready');

  });
});
