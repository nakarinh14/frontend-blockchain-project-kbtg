const numericRegex = /^$|(^\d+\.?\d{0,2}?$)/;
const strictNumericRegex = /^\d+\.?\d{1,2}?$/

export const regexCheckDecimal = (text, setter) => {
    if(numericRegex.test(text)){
        setter(text)
    }
}

export const validateDecimal = (text) => strictNumericRegex.test(text)
