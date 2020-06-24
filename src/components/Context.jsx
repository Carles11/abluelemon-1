import React, { createContext } from 'react';
import LOCALES from '../utils/locales.json';

export const LocalesContext = createContext(LOCALES.ES);
