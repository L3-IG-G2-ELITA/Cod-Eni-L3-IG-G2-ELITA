"use client"
import React from 'react';
import Link from "next/link";
import {IStepLink} from "@/app/_common/constants/step_data";
import useFormStore from "@/state/step_form_state";

interface Props{
    item:IStepLink
}

const Step = (props:Props) => {
    const validationStatus = useFormStore((state) => state.validationStatus);
    const isValid = validationStatus[`step${props.item.rank}` as keyof typeof validationStatus]
    return (
        <div className="flex space-x-2 items-start text-2xl" >
            {isValid ? (
                <>
                    <div className="relative">
                        <div className={`border-none bg-[#5541D9]  rounded-full py-[2px] text-white ${props.item.rank === 1 ? " px-3.5" : "px-3 "}`}>
                            <h5>{props.item.rank}</h5>
                        </div>
                        <div className="h-[5vh]  ml-4 w-[3px] bg-[#5541D9]"/>
                    </div>
                    <Link className="text-[#5541D9] " href={props.item.href}>
                        {props.item.label}
                    </Link>
                </>
            ) : (
                <>
                    <div>
                        <div className="border border-black px-2.5 py-[2px] rounded-full text-black">
                            <h5>{props.item.rank}</h5>
                        </div>
                        <div className="h-[5vh]  ml-4 w-[3px] bg-gray-500"/>
                    </div>
                    <span className="text-gray-500">{props.item.label}</span>
                </>
            )}

        </div>
    );
};

export default Step;