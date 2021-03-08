const numericRegex = /^$|(^\d+\.?\d{0,2}?$)/;

export const regexCheckDecimal = (text, setter) => {
    if(numericRegex.test(text)){
        setter(text)
    }
}

export const validateDecimal = (text) => numericRegex.test(text)
