import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  img: computed('params.[]', function(){
    return this.get('params')[0];
  }),
  slot: computed('params.[]', function(){
    return this.get('params')[1];
  }),
  fruitName: computed('params.[]', function(){
    return this.get('params')[2];
  }),
  didInsertElement: function() {
    // Initialize fruitName
    this.set('fruitName',"ready");
  }
})
.reopenClass({
  positionalParams: 'params'
});
