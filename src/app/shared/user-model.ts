export class UserModel {
  id: number;
  name: string;
  email: string;
  address: string;
  dateOfBirth: string;
  gender: string;
  constructor(param?: UserModel) {
    if ( param ) {
      Object.assign(this, param);
    }
  }
  // userModel.exampleUser()
    static get exampleUser(): UserModel{
      return{
        id: 0,
        name: 'Virág Gábor',
        email: 'gabo&valami.com',
        address: 'világvége',
        dateOfBirth: '2000.01.01.',
        gender: 'male'
      };
  }
}
