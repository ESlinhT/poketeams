const images = {};

const context = require.context('../assets/pokemon', false, /\.png$/);

context.keys()
    .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0], 10);  // Extract number from the file name
        const numB = parseInt(b.match(/\d+/)[0], 10);  // Extract number from the file name
        return numA - numB;  // Sort numerically
    })
    .forEach((key) => {
    const fileName = key.match(/\d+/)[0];
    images[`_${fileName}`] = context(key);
});

export default images;
