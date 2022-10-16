import type { NextPage } from 'next';
import Image from 'next/image';

import imagem from '../assets/images/photo.png';
import { LogoSVG } from '../assets/svgs/logo';

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={`flex h-screen flex-col bg-red-700 text-white`}>
      <figure className="flex justify-center">
        <LogoSVG />
      </figure>
      <div className="container m-auto flex flex-col items-center space-y-6 p-6  md:flex-row md:space-y-0 md:space-x-6">
        <figure className="flex justify-center md:flex-1">
          <Image src={imagem} alt="Picture of the author" />
        </figure>

        <div className="flex flex-col space-y-6 md:flex-1">
          <h1 className="text-center text-3xl font-bold md:text-left">
            Make your guess at the 2022 Qatar World Cup!
          </h1>

          <button className="rounded-xl bg-white px-8 py-4 text-xl text-red-700">
            Create my account
          </button>

          <button className="rounded-xl border border-white px-8 py-4 text-xl text-white">
            Create my account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
