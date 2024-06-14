import React from 'react';

const HeaderContent = () => {
    return (
        <div className="flex flex-col space-y-20">
            <h1 className="text-7xl font-bold text-center px-[10%]">
                Accédez <span className="highlight ">facilement</span> à tous les services <span>gouvernementaux</span> <span className="text-[#072BF2]">malagasy</span>
            </h1>
            <div className="flex  justify-around items-center px-[30%]">
                <button className="bg-white text-black border-none px-6 py-3 rounded-full">
                    Comment ça marche ?
                </button>
                <button className="bg-[#5541D9] border-none px-6 py-3 text-white rounded-full">
                    Accèdez à vos services
                </button>
            </div>
        </div>
    );
};

export default HeaderContent;