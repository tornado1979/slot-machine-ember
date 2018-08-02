import Route from '@ember/routing/route';
// import { Ember } from 'ember';
import { reelData } from '../reelData'
import { winsData } from '../winsData'

const images = {
  "apple": 'assets/img/apple.png',
  "lemon": 'assets/img/lemon.png',
  "cherry":'assets/img/cherry.png',
  "banana":'assets/img/banana.png',
}


export default Route.extend({
  model() {
    return {
      images,
      reelData,
      slotBlocks: 3,
      winsData,
    }
  }
});
