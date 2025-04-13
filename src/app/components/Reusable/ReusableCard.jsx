import Image from 'next/image';

const ReusableCard = ({ title, description, icon }) => {
    return (
        <div 
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md 
                       dark:bg-gray-800 dark:border-gray-700 text-center 
                       transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
            <Image 
                src={icon} 
                width={100} 
                height={100} 
                alt='Not found' 
                className='m-auto p-6' 
            />
            
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </a>
            
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
};

export default ReusableCard;
