import React from 'react';
import Step from "@/app/steps/_components/step";
import {step_link} from "@/app/_common/constants/step_data";

const SideIndicator = () => {

    return (
        <div className="flex w-[40%]  flex-col space-y-1 justify-start mt-36  h-screen ">
            {
                step_link.map((elem,key)=>(

                    <Step item={elem} key={key}/>
                ))
            }
        </div>
    );
};

export default SideIndicator;