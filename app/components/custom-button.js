import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  text: computed('params.[]', function(){
    return this.get('params')[0];
  }),
  disabled: computed('params.[]', function(){
    return this.get('params')[1];
  }),
  actions: {
    onSpin() {
      //call the onSpin property to invoke the passed in action
      this.get('spin')();
    },
  },
});
