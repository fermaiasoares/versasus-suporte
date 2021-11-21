import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyBOCSCoBfUaJHlwHSUv2EK8ChYpwHfS7HM",
  authDomain: "versasus---ace.firebaseapp.com",
  databaseURL: "https://versasus---ace-default-rtdb.firebaseio.com",
  projectId: "versasus---ace",
  storageBucket: "versasus---ace.appspot.com",
  messagingSenderId: "922678609102",
  appId: "1:922678609102:web:5f1cc9522f22ea5a2efc9f"
};

export function initializeFireBase() {
  return initializeApp(firebaseConfig);
}