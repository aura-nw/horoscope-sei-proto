import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
	protoDirs,
	outPath,
	options: {
    "aminoEncoding": {
      "enabled": true
    },
    "lcdClients": {
      "enabled": true
    },
    "rpcClients": {
      "enabled": true
    },
    "prototypes": {
      "typingsFormat": {
        "timestamp": "date",
        "duration": "string",
        "num64": "long"
      },
      "methods": {
        "fromJSON": true,
        "toJSON": true,
        "encode": true,
        "decode": true,
        "fromPartial": true,
        "toAmino": false,
        "fromAmino": false,
        "fromProto": false,
        "toProto": false
      }
    },
    "interfaces":{
      "enabled": false
    }
  }
})
	.then(() => {
		console.log('✨ all done!');
	})
	.catch((e) => {
		console.error(e);
	});
