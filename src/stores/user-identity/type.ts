interface DocumentData {
  fullName: string;
  gender: string;
  religion: string;
  birthPlace: string;
  birthDate: string;
}

interface ContactData {
  email: string;
  phone: string;
}

interface AddressData {
  address: string;
  rtrw: string;
  province: string;
  city: string;
  postalCode: string;
}

interface PersonalData {
  address: AddressData;
  mothersName: string;
  maritalStatus: string;
}

export type { ContactData, DocumentData, PersonalData };
