import React from 'react';
import {services} from "@/app/_common/constants/values_data";
import ServiceCard from "@/app/_common/components/service_card";

const Service = () => {
    return (
        <div className=" flex  flex-col px-[8%]  h-screen space-y-24">
            <div className="flex justify-between items-center">
                <div className="flex flex-col space-y-6 w-[45%]">
                    <h2 className="font-bold text-6xl">
                        Service de Qualité
                    </h2>
                    <h4>
                        Vous pouvez accèder
                    </h4>
                </div>
                <p className="w-[45%] text-sm">
                    Accédez facilement à une variété de services gouvernementaux en ligne avec CitizenConnect.
                    Simplifiez vos démarches administratives et gérez vos demandes en toute sécurité et efficacité
                </p>
            </div>
            <div className="flex w-full justify-between space-x-16 items-center">
                {
                    services.map((elem,key)=>(
                        <ServiceCard item={elem} key={key}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Service;