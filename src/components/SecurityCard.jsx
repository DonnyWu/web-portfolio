import React from 'react';
import profile from '../logo/Profile.jpg';

// HID card ratio: 54mm x 85.6mm => aspect ratio width/height = 54/85.6
const HID_RATIO = '54 / 85.6';

const SecurityCard = ({ name = 'Donnie Wu', title = 'Software Engineer', id = 'ID-2020' }) => {
  return (
    <div className="card-wrapper relative w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0">

      <a
        href="https://github.com/DonnyWu"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Donny Wu's GitHub"
        className="security-card relative bg-white text-[#0a192f] rounded-3xl overflow-hidden shadow-2xl p-4 block"
        style={{ aspectRatio: HID_RATIO }}
      >
        {/* top cutout (badge slot) */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 md:w-14 h-3 rounded-full bg-[#24305E] z-10"></div>

        <div className="flex flex-col items-center h-full w-full box-border pt-6">
        {/* middle area: photo centered between cutout and footer */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="w-3/4 sm:w-[92%] md:w-4/5 lg:w-3/4 aspect-square rounded-full overflow-hidden border-4 border-white shadow-md z-20">
            <img src={profile} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* name/title placed below the photo */}
        <div className="text-center px-2 mb-2">
          <div className="font-semibold text-base sm:text-lg">{name}</div>
          <div className="text-xs sm:text-sm text-gray-600">{title}</div>
        </div>

        {/* footer: barcode + id */}
        <div className="w-full flex flex-col items-center pb-4 px-4">
          <div className="w-2/3 h-1 bg-gray-200 rounded"></div>
          <div className="mt-2 flex space-x-1 items-end">
            <div className="w-2 h-6 sm:h-8 bg-gray-700 rounded-sm"></div>
            <div className="w-1.5 h-6 sm:h-8 bg-gray-700 rounded-sm"></div>
            <div className="w-1 h-6 sm:h-8 bg-gray-700 rounded-sm"></div>
            <div className="w-3 h-6 sm:h-8 bg-gray-700 rounded-sm"></div>
            <div className="w-1 h-6 sm:h-8 bg-gray-700 rounded-sm"></div>
            <div className="w-2 h-6 sm:h-8 bg-gray-700 rounded-sm"></div>
          </div>
          <div className="mt-2 text-xs text-gray-500">ID: {id}</div>
        </div>
      </div>
    </a>
    </div>
  );
};

export default SecurityCard;
