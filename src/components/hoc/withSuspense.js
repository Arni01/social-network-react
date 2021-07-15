import React from 'react';
import { Suspense } from 'react';
import Preloader from '../common/Preloader/Preloader';

export const withSuspense = (Component) => {
  return () => (
    <Suspense fallback={<Preloader />}>
      <Component />
    </Suspense>
  );
};
