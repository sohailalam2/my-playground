import { printOnDOMCommandResult } from '@/app';
import { Magician } from './Magician';

const magician = new Magician('Dr. Strange');

printOnDOMCommandResult('magician.showMagic()', magician.showMagic());
