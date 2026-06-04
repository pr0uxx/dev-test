import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Item, ShiMart } from '../../app/shi-mart';

describe('ShiMart', () => {
  it('VerifyItemBehaviors', () => {
    const testData = [
      { item: new Item('Test', 10, 20), expectedSellIn: 9, expectedQuality: 19 },
      { item: new Item('Regular Item', 5, 10), expectedSellIn: 4, expectedQuality: 9 },
      { item: new Item('Aged Brie', 5, 10), expectedSellIn: 4, expectedQuality: 11 },
      { item: new Item('Some Item', 10, 20), expectedSellIn: 9, expectedQuality: 19 },
      { item: new Item('Aged Brie', 10, 20), expectedSellIn: 9, expectedQuality: 21 },
      { item: new Item('Canned Beans', 10, 20), expectedSellIn: 10, expectedQuality: 20 },
      { item: new Item('Baked Sourdough Bread', 3, 6), expectedSellIn: 2, expectedQuality: 4 },
      { item: new Item('Baked Sourdough Bread', 0, 6), expectedSellIn: -1, expectedQuality: 2 },
      { item: new Item('Baked Sourdough Bread', 0, 2), expectedSellIn: -1, expectedQuality: 0 },
      { item: new Item('Aged Brie', 5, 50), expectedSellIn: 4, expectedQuality: 50 },
    ];
    
    const x = testData.map(t => t.item);    
    const app = new ShiMart(x);
    app.updateQuality();
    
    for (let i = 0; i < testData.length; i++) {
      expect(testData[i].item.sellIn).to.equal(testData[i].expectedSellIn);
      expect(testData[i].item.quality).to.equal(testData[i].expectedQuality);
    }
  });
});