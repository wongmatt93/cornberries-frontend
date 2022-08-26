export default interface UserProfile {
  id?: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
}
