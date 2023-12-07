import React, {FC} from 'react';
import {Main} from "./Main";
import {ErrorBoundary} from "react-error-boundary";
import {CustomErrorBoundary} from "./CustomErrorBoundary";

export const Home: FC = () => {
  return (
    <div className='w-full h-full bg-[#FFFAF5]'>
      <header className='w-full pb-5 pt-10 border-b border-[#C7C7C7]'>
        <img className='ml-[100px]' src="/assets/testLodo.svg" alt="logo"/>
      </header>
      <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
        <Main/>
      </ErrorBoundary>

    </div>
  );
};

