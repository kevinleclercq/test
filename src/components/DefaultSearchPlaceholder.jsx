import React from 'react';
import Ipin from '../../public/images/pin.svg';

export default function DefaultSearchPlaceholder() {
    return (
        <div className='bg-y-gray-light h-[245px] flex flex-col items-center justify-center'>
            <img className='' src={Ipin.src} alt="image pin" />
            <p className='text-[18px] font-normal font-montserrat text-y-gray'>
                Lancez une recherche pour afficher les points de vente ici !
            </p>
        </div>
    );
}