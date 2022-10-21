import { atomWithStorage } from 'jotai/utils';

import { ContactData, DocumentData, PersonalData } from './type';

interface UserIdentityAtom {
  selfie: boolean;
  ktpNumber: number;
  document: DocumentData;
  contact: ContactData;
  personal: PersonalData;
  savedUntilPage: number;
}

const userIdentityAtomDefaultValue: UserIdentityAtom = {
  selfie: false,
  ktpNumber: 1000199250333,
  document: {
    fullName: 'Dian Reza',
    gender: 'Male',
    religion: 'Islam',
    birthPlace: 'Jakarta',
    birthDate: '30/10/1990',
  },
  contact: {
    email: '',
    phone: '',
  },
  personal: {
    address: {
      address: '',
      rtrw: '',
      province: '',
      city: '',
      postalCode: '',
    },
    mothersName: '',
    maritalStatus: '',
  },
  savedUntilPage: 0,
};

const userIdentityAtom = atomWithStorage<UserIdentityAtom>(
  'userIdentityAtom',
  userIdentityAtomDefaultValue
);

export default userIdentityAtom;
