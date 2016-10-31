var homes = [{
    "h_id": "3",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201",
    "price": "162500"
}, {
    "h_id": "4",
    "city": "Bevery Hills",
    "state": "CA",
    "zip": "90210",
    "price": "319250"
}, {
    "h_id": "5",
    "city": "New York",
    "state": "NY",
    "zip": "75201",
    "price": "962500"
}];

function ordered(a, b) {
    if (a.zip < b.zip) {
        return -1 }
    if (a.zip > b.zip) {
        return +1 }
    if (a.price < b.price) {
        return -1 }
    if (a.price > b.price) {
        return 1 }
    return 0
}

var arr_s = homes.sort(ordered)
console.log(arr_s)
/*
[ { h_id: '3',
    city: 'Dallas',
    state: 'TX',
    zip: '75201',
    price: '162500' },
  { h_id: '5',
    city: 'New York',
    state: 'NY',
    zip: '75201',
    price: '962500' },
  { h_id: '4',
    city: 'Bevery Hills',
    state: 'CA',
    zip: '90210',
    price: '319250' } ]
 */   
