import { expect } from 'chai';
import { Dependencies } from './utils/Dependencies';

it('should be an array of dependencies', () => {
  expect(Dependencies.length).to.equal(6);
});
