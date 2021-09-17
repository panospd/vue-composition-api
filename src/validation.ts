interface Rule {
    type: "required" | 'length'
}

interface Require extends Rule {
    type: "required"
}

interface LengthOptions {
    min: number,
    max: number
}

interface Length extends Rule {
    type: "length",
    options: LengthOptions
}

export function required(): Require {
    return {
        type: "required"
    }
}

export function length(options: LengthOptions): Length {
    return {
        type: "length",
        options
    }
}

export interface Status {
    valid: boolean,
    message?: string
}

type Validator = Require | Length

export function validate(value: string | undefined, validators: Validator[]) : Status {
    for (const validator of validators) {
        if (validator.type === "required") {
            if (!value || !value.length) {
                return {
                    valid: false,
                    message: "This value is required"
                }
            }
        }

        if (validator.type === "length") {
            const {min, max} = validator.options
            if (value!.length < min || value!.length > max) {
                return {
                    valid: false,
                    message: `The value must be between ${min} and ${max}`
                }
            }
        }
    }
    return {
        valid: true
    }
}

// const result = validate("username", []) => {
//     return {

//     }
// }