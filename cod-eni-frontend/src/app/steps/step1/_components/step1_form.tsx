"use client"
import React from 'react';
import {useRouter} from "next/navigation";
import useFormStore from "@/state/step_form_state";
import {useForm} from "react-hook-form";

interface Step1FormData {
    name: string;
}

const Step1Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Step1FormData>();
    const setFormData = useFormStore((state) => state.setFormData);
    const setValidationStatus = useFormStore((state) => state.setValidationStatus);
    const nextStep = useFormStore((state) => state.nextStep);
    const router = useRouter();

    const onSubmit = (data: Step1FormData) => {
        setFormData(data);
        setValidationStatus('step1', true);
        nextStep();
        router.push('/step2');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" {...register('name', { required: true })} />
                {errors.name && <span>Name is required</span>}
            </div>
            <button type="submit">Next</button>
        </form>
    );
};

export default Step1Form;