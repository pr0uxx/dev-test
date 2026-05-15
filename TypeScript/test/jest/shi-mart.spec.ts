import { describe, expect, it } from '@jest/globals';
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
      expect(testData[i].item.sellIn).toBe(testData[i].expectedSellIn);
      expect(testData[i].item.quality).toBe(testData[i].expectedQuality);
    }
    
    expect(x[3].sellIn).toBe(9);
    expect(x[3].quality).toBe(19);
    expect(x[4].sellIn).toBe(9);
    expect(x[4].quality).toBe(21);
    
    expect(y.sellIn).toBe(10);
    expect(y.quality).toBe(20);
  });
});