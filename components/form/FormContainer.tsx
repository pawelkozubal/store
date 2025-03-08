'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from 'sonner';
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};