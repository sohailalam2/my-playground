import { randomInt, randomId, randomUUIDv4 } from '@sohailalam2/abu';

import { printOnDOMCommandResult } from '@/app';

printOnDOMCommandResult('randomInt()', randomInt());
printOnDOMCommandResult('randomId()', randomId());
printOnDOMCommandResult('randomUUIDv4()', randomUUIDv4());
