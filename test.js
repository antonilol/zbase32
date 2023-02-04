const { strict: assert } = require('assert');
const zbase32 = require('.');
const { randomBytes } = require('crypto');

// encoding
assert(zbase32.encode(Buffer.from('')) === '');
assert(zbase32.encode(Buffer.from('hello')) === 'pb1sa5dx');
assert(zbase32.encode(Buffer.from('string')) === 'qp48r4mqch');
assert(zbase32.encode(Buffer.from([0,1,2,3,4,5,6,7,8])) === 'yyyoryarywdyqny');

// decoding
assert(zbase32.decode('').equals(Buffer.from('')));
assert(zbase32.decode('pb1sa5dx').equals(Buffer.from('hello')));
assert(zbase32.decode('qp48r4mqch').equals(Buffer.from('string')));
assert(zbase32.decode('yyyoryarywdyqny').equals(Buffer.from([0,1,2,3,4,5,6,7,8])));

// specific length random bytes
for (let i = 0; i < 1000; i++) {
    const bytes = randomBytes(i);
    assert(zbase32.decode(zbase32.encode(bytes)).equals(bytes));
}

console.log('No test failed');
