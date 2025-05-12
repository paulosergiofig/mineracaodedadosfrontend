import React from 'react';
import { NavLink } from 'react-router';
import NotFoundImage from '@/assets/imgs/404-asset.png';

export const NotFound: React.FC = () => {
  return (
    <div className="h-full w-fullwhite-background flex justify-center items-center">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="">
          <div className="flex justify-center mb-8">
            <img 
              src={NotFoundImage} 
              alt="Página não encontrada" 
              className="w-[600px] "
            />
          </div>
          <h1 className="text-5xl font-bold text-center mb-4 text-dark-blue">OOPS!</h1>
          <p className="text-center text-dark-blue text-lg mb-6">
            Não conseguimos encontrar a página que você estava procurando.
            <br />
            Verifique o endereço digitado ou{' '}
            <NavLink to="/" className="font-bold text-grayish-blue underline hover:text-blue">
              volte ao início
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
