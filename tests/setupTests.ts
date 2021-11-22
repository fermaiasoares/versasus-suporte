import '@testing-library/jest-dom/extend-expect';

import { initializeFireBase } from '../src/services/Firebase';

const testFirebaseApp = initializeFireBase();

export { testFirebaseApp }
