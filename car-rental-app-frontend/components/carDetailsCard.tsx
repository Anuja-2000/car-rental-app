import Image from 'next/image';
import GearShifter from '../app/assets/images/gear-shifter.svg';
import FuelMeter from '../app/assets/images/fuel-meter.svg';
import AirCon from '../app/assets/images/air-con.svg';
import CarSkeleton from '../app/assets/images/car-skeleton.svg';

export default function CarDetailsCard({ brand = "", model = "", type='', image= '', transmission = "", fuelType = "", airCon = "", price = 100, description = "" }) {
    return (
        <div className="text-black p-6 rounded-lg shadow-md bg-gray-50">
            <Image src={CarSkeleton} alt={brand} className="w-full md:h-64 md:object-cover mb-6" />
            <div className="display flex justify-between items-center mb-1">
            <span className="text-2xl font-semibold ">{brand} {model}</span>            
            <span className="text-xl font-semibold text-customPurple"><p>${price}</p></span>
            </div>
            <div className="flex justify-between items-center mb-6 opacity-60">
            <p>{type}</p>
            <p>per day</p>
            </div>
            <div className="display md:flex justify-between items-center">
            <div className='display flex'>
                <Image src={GearShifter} alt="Seat" />
                <span className="ml-2 opacity-60">{transmission}</span>
            </div>
            <div className='display flex my-4 md:my-0'>
                <Image src={FuelMeter} alt="Seat" />
                <span className="ml-2 opacity-60">{fuelType}</span>
            </div>
            <div className='display flex'>
                <Image src={AirCon} alt="Seat" />
                <span className="ml-2 opacity-60">{airCon}</span>
            </div>
            </div>
            <div className='p-2 mt-6 bg-primary rounded-lg'>
                <button type='button' className='w-full justify-center'><span className='text-white font-bold'>View Details</span></button>
            </div>
            </div>
            );
}