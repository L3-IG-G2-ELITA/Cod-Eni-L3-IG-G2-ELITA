import React, {PropsWithChildren} from 'react';
import SideIndicator from "@/app/steps/_components/side_indicator";

export  default function  Layout ({ children }: PropsWithChildren) {
    return (
        <div className="flex  items-start justify-between px-[10%]  ">
            <SideIndicator/>
            <div className="w-[42%] mr-[4%]" >
                {children}
            </div>
        </div>
    );
};

