import React, { useState, useEffect } from 'react';
import Ienseigne from '../../public/images/enseigne_magasin.svg';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import DefaultSearchPlaceholder from '../components/DefaultSearchPlaceholder';
import SearchBoutique from '../components/SearchBoutique';
import { searchRetailPoints } from '../utils/YperApi';


export default function Home() {
  const [geoCoding, setGeoCoding] = useState('');


  return (
    <div>
      <Header />
      <div className="container mx-auto pt-40 md:pt-40 max-w-[1440px]  md:px-20 lg:px-40">
        <div className='flex flex-col items-center lg:flex-row'>
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold font-montserrat w-full md:w-[570px] h-[125px] leading-[53px]">
              Trouvez les points de vente proches de chez vous !
            </h1>

            <p className="text-sm md:text-[18px] text-y-gray mt-4 md:mt-[22px] font-normal font-montserrat w-full md:w-[570px] h-[63px] leading-[30px]">
              Renseignez votre adresse dans le champ ci-dessous, et trouvez tous nos points de vente en quelques instants :
            </p>

            <SearchInput setGeoCoding={setGeoCoding} />
          </div>

          <div className="w-full mt-10 hidden lg:block lg:w-1/2">
            <img src={Ienseigne.src} alt="enseigne image" className="w-auto h-[373px] mt-[-20px] ml-[100px]" />
          </div>
        </div>

        {geoCoding === '' ? (
          <DefaultSearchPlaceholder />
        ) : (
          <SearchBoutique geoCode={geoCoding} />
        )}
      </div>
    </div>
  );
}
