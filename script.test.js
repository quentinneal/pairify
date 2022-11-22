const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
];

it('failed search', () => {
    expect(googleSearch('dis', dbMock)).toEqual([])
})

it('successful search', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
})