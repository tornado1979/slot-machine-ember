import Component from '@ember/component';
import { computed } from '@ember/object';
import _ from 'lodash';

export default Component.extend({
  coins: 999,
  disabled: false,
  slotOne: '',
  slotTwo: '',
  slotThree: '',
  reel1Fruit: '',
  reel2Fruit: '',
  reel3Fruit: '',
  reel1FruitImg: 'assets/img/default.jpeg',
  reel2FruitImg: 'assets/img/default.jpeg',
  reel3FruitImg: 'assets/img/default.jpeg',
  actions: {
    spin: function(){
      //disable spin button
      this.set('disabled', true)

      //deduct -5 coins
      this.set('coins', this.coins - 5)
      // blur reels
      this.set('reel1FruitImg', 'assets/img/spin.png')
      this.set('reel2FruitImg', 'assets/img/spin.png')
      this.set('reel3FruitImg', 'assets/img/spin.png')
      // reset text underneath reel
      this.set('reel1Fruit', 'spinning')
      this.set('reel2Fruit', 'spinning')
      this.set('reel3Fruit', 'spinning')

      // suffle reels
      const slotOne = Math.floor(Math.random() * (7 - 1 + 1)) + 1
      const slotTwo = Math.floor(Math.random() * (7 - 1 + 1)) + 1
      const slotThree = Math.floor(Math.random() * (7 - 1 + 1)) + 1

      // refresh slot values
      this.set('slotOne', slotOne)
      this.set('slotTwo', slotTwo)
      this.set('slotThree', slotThree)

      // fruit image for each reel
      this.images
          // group each fruit with its occurences as a {key:value} pairs
      const occurArr = _
        .countBy([this.reelData.Reel1[slotOne], this.reelData.Reel2[slotTwo], this.reelData.Reel3[slotThree]])
      const fruitWithMaxOccurs = Object.keys(occurArr).filter(key => occurArr[key] > 1)

      // update the image on each reel
      // i add a small delay on each reel
      setTimeout(() => (
        // fruit names for each reel
        this.set('reel1Fruit', this.reelData.Reel1[slotOne]),
        this.set('reel1FruitImg', this.images[this.reel1Fruit])  
      ), 500)
      setTimeout(() => (
        this.set('reel2Fruit', this.reelData.Reel2[slotTwo]),
        this.set('reel2FruitImg', this.images[this.reel2Fruit])
      ), 1000)
      setTimeout(() => (
        this.set('reel3Fruit', this.reelData.Reel3[slotThree]),
        this.set('reel3FruitImg', this.images[this.reel3Fruit]),

        // enable spin button
        this.set('disabled', false),

        // update coins on state
        Object.keys(this.winsData).filter(key => {
          if (key === fruitWithMaxOccurs[0]) {
            if (this.winsData[fruitWithMaxOccurs][occurArr[fruitWithMaxOccurs]] !== undefined) {
              const coinsWon = this.winsData[fruitWithMaxOccurs][occurArr[fruitWithMaxOccurs]]
              // update coins
              this.set('coins', this.coins + coinsWon)
            }
            return this.winsData[fruitWithMaxOccurs][occurArr[fruitWithMaxOccurs]]
          }
        })
      ), 1500)
    },
  },
  images: computed('params.[]', function(){
    return this.get('params')[0];
  }),
  reelData: computed('params.[]', function(){
    return this.get('params')[1];
  }),
  slotBlocks: computed('params.[]', function(){
    return this.get('params')[2];
  }),
  winsData: computed('params.[]', function(){
    return this.get('params')[3];
  })
}).reopenClass({
  positionalParams: 'params'
});
