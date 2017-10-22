import { expect } from 'chai';
import { Dependencies } from './utils/Dependencies';
import { results } from './App';

it('should be an array of dependencies', () => {
  expect(Dependencies.length === 6).to.be.true;
});

// it('should be an object with entries', () => {
//   return;
// });
