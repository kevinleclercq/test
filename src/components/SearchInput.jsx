import React, { useRef, useEffect } from 'react';

export default function SearchInput({ setGeoCoding }) {
  const inputRef = useRef(null);
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    if (typeof google !== 'undefined') {
      autoCompleteRef.current = new google.maps.places.Autocomplete(inputRef.current);
    }
  }, []);

  const handleButtonClick = () => {
    if (inputRef.current.value.trim() === '') {
      alert('Merci de saisir une adresse.');
    } else {
      const place = autoCompleteRef.current.getPlace();

      if (!place.geometry) {
        alert('Aucune donnée disponible pour cette adresse.');
        return;
      }

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setGeoCoding(`${lat},${lng}`);
      console.log('Adresse saisie:', place.formatted_address);
    }
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        placeholder="Votre adresse"
        ref={inputRef}
        className="w-[400px] h-[50px] bg-y-gray-light border-none p-2 rounded-l"
      />
      <button className="bg-y-blue text-white w-[170px] h-[50px] rounded-r" onClick={handleButtonClick}>
        Rechercher
      </button>
    </div>
  );
}
