export default interface UserProfile {
  _id?: string;
  email: string;
  displayName: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
}
