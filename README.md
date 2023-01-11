# @steelskysoftware/facade-toolbox

Collection of various JavaScript utilities.

Documentation is WIP.

## ITERABLE
`randomItems(iterable, amount)`
Returns `amount` of randomized items from the input iterable using the Fisher-Yates method. Returns a single value instead of an array if `amount` is 1 or falsy. `amount` will always be rounded to an absolute integer.

## ARRAY
`shuffle(array)`
Shuffles the input array in-place using the Fisher-Yates method.
