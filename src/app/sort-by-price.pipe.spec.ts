import { SortByPricePipe } from './sort-by-price.pipe';

describe('SortByPricePipe', () => {
  it('sorts items by price in ascending order', () => {
    const pipe = new SortByPricePipe();
    const items = [
      { name: 'Figurine Astrérix', price: 15, image: `/assets/Images/Figurine Astérix.jpg` },
  { name: 'Figurine Obélix', price: 15, image: `/assets/Images/Figurine Obelix.jpg` },
  { name: 'Figurine Idéfix', price: 12, image: `/assets/Images/figurine Idefix.webp` },
  { name: 'Figurine Astérix et Obélix', price: 29, image: `/assets/Images/figurine Astérix&Obelix.webp` },
  { name: 'Figurine Asttérix et Idéfix', price: 21, image: `/assets/Images/Figurine Atérix&Idefix.jpg` }
    ];
    const sortedItems = pipe.transform(items);
    expect(sortedItems[0].name).toBe('Figurine Idéfix');
    expect(sortedItems[1].name).toBe('Figurine Astrérix');
    expect(sortedItems[2].name).toBe('Figurine Obélix');
    expect(sortedItems[3].name).toBe('Figurine Asttérix et Idéfix');
    expect(sortedItems[4].name).toBe('Figurine Astérix et Obélix');
  });
});