import {create,  StoreApi, UseBoundStore} from 'zustand'


interface FormData {
    [key: string]: any;
}

interface ValidationStatus {
    step1: boolean;
    step2: boolean;
    step3: boolean;
    step4: boolean;
}

interface FormStoreState {
    step: number;
    formData: FormData;
    validationStatus: ValidationStatus;
    nextStep: () => void;
    prevStep: () => void;
    setFormData: (data: FormData) => void;
    setValidationStatus: (step: keyof ValidationStatus, isValid: boolean) => void;
    resetForm: () => void;
}

const useFormStore = create<FormStoreState>((set) => ({
    step: 1,
    formData: {},
    validationStatus: {
        step1: true,
        step2: false,
        step3: false,
        step4: false,
    },
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: state.step - 1 })),
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
    setValidationStatus: (step, isValid) => set((state) => ({
        validationStatus: { ...state.validationStatus, [step]: isValid }
    })),
    resetForm: () => set({
        step: 1,
        formData: {},
        validationStatus: { step1: false, step2: false, step3: false, step4: false }
    }),
}));


export default useFormStore;




type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S,
) => {
    let store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }

    return store
}
