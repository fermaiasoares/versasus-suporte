import { FirebaseError } from '@firebase/util';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


async function signIn(email: string, password: string) {
  const auth = getAuth();

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    if(error instanceof FirebaseError) {
      console.log(error.code);
    }
  }
}

export { signIn };