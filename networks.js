var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('70352205'),
  addressVersion: 0x21,
  privKeyVersion: 161,
  P2SHVersion: 85,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('758ad81dbb3173a4c9af251112c36f7662a554fb80be90c8f5788b1700000000'),
    merkle_root: hex('43b1368f320deb845f8e3527d93085516d01274f09815976db2d8a7145bff812'),
    height: 0,
    nonce: 3188021359,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1407444851,
    bits: 486604799, //Bits:0x1d00ffff
  },
  dnsSeeds: [ //TODO: ADD DNSSEEDS
    '54.94.161.254',
    '54.76.224.149'
  ],
  defaultClientPort: 41353
};




exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 41454
};
