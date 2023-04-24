import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getRetailPointById } from '../../utils/YperApi';
import Map from '../../components/Map';
import Link from 'next/link';

function Boutique() {
  const router = useRouter();
  const { id } = router.query;
  const [retailPoint, setRetailPoint] = useState(null);

  useEffect(() => {
    if (id) {
      console.log('id', id)
      getRetailPointById(id).then((data) => {
        setRetailPoint(data);
        console.log('boutique', data);
      });
    }
  }, [id]);

  if (!retailPoint) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto pt-40 max-w-[1440px] px-4 md:px-20 lg:px-40">
        <div className='flex flex-col lg:flex-row mb-3'>
          <div className="lg:w-2/4">
            <h1 className="text-4xl font-bold font-montserrat leading-[53px]">
              {retailPoint.name}
            </h1>
            <p className='mt-5'>
              {retailPoint.address.formatted_address}
            </p>
          </div>

          <div className="lg:w-2/4 h-[300px]">
            <Map
              center={{
                lat: retailPoint.address.location.coordinates[1],
                lng: retailPoint.address.location.coordinates[0]
              }}
              zoom={12}
              markers={retailPoint}
            />
          </div>
        </div>

        <h2 className='text-base  font-bold font-montserrat'>
          Horaires d’ouverture :
        </h2>

        <div className='bg-y-gray-light p-6 mb-3'>
              
        </div>

        <div className="border-b-2 ml-0  ml-6 mb-3"></div>
        <Link href={`/`}>
          <span className="cursor-pointer text-base font-normal font-montserrat"> Retour aux résultats</span>
        </Link>


      </div>
    </div>
  );
}

export default Boutique;
