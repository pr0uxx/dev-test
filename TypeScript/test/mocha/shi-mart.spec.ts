import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Item, ShiMart } from '../../app/shi-mart';

describe('ShiMart', () => {
  it('VerifyItemBehaviors', () => {
    const testData = [
      { item: new Item('Test', 10, 20), expectedSellIn: 9, expectedQuality: 19 },
      { item: new Item('Regular Item', 5, 10), expectedSellIn: 4, expectedQuality: 9 },
      { item: new Item('Aged Brie', 5, 10), expectedSellIn: 4, expectedQuality: 11 }
    ];
    
    const x = testData.map(t => t.item);
    x.push(new Item('Some Item', 10, 20));
    x.push(new Item('Aged Brie', 10, 20));
    const y = new Item('Canned Beans', 10, 20);
    x.push(y);
    
    const app = new ShiMart(x);
    app.updateQuality();
    
    for (let i = 0; i < testData.length; i++) {
      expect(testData[i].item.sellIn).to.equal(testData[i].expectedSellIn);
      expect(testData[i].item.quality).to.equal(testData[i].expectedQuality);
    }
    
    expect(x[3].sellIn).to.equal(9);
    expect(x[3].quality).to.equal(19);
    expect(x[4].sellIn).to.equal(9);
    expect(x[4].quality).to.equal(21);
    
    expect(y.sellIn).to.equal(10);
    expect(y.quality).to.equal(20);
  });
});