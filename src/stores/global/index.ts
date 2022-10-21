import { atom } from 'jotai';

interface GlobalAtom {
  username: string;
  theme: number;
}

const globalAtomDefaultValue: GlobalAtom = {
  username: 'John',
  theme: 1,
};

const globalAtom = atom<GlobalAtom>(globalAtomDefaultValue);

export default globalAtom;
