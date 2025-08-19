import React from 'react';

function Cards({ item }) {
  return (
    <div className='mt-7 my-4 p-3'>
     <div className="card bg-base-100 dark:bg-slate-900 dark:text-white dark:border shadow-sm h-full transition-all hover:scale-105 duration-200">

        <figure className="relative w-full pt-[80%]">
          <img
            src={item.image}
            alt={item.name}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
            onError={(e) => {
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        </figure>
        <div className="card-body p-4">
          <div>
            <h2 className="card-title text-lg flex items-center gap-2 dark:text-white">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-sm line-clamp-2 mt-2 dark:text-gray-300">{item.title}</p>
          </div>
          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline dark:text-gray-300 dark:border-gray-500">₹{item.price.toFixed(2)}</div>
            <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white duration-200 dark:text-gray-300 dark:border-gray-500 dark:hover:border-pink-500">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;