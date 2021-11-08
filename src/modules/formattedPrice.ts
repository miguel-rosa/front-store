const formattedPrice = (price: number) => `$${(price/100).toFixed(2)}`;

export default formattedPrice