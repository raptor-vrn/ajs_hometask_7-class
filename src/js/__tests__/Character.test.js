import Character from '../Character.js'

test('Character', () => {
    const Snow = new Character('snow', 'Bowman');
    expect(new Character('snow', 'Bowman')).toEqual(Snow);
});
