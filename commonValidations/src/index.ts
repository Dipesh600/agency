import {z} from "zod"

export const UserSignUpInp=z.object({
    fistName:z.string(),
    lastName:z.string(),
    email:z.string(),
    password:z.string().min(8),
    phoneNo:z.number().min(10),
})

export const UserSignInInp=z.object({
    email:z.string(),
    password:z.string().min(8)
})

export const PremiumUserSignUp=z.object({
    firstName:z.string(),
    lastName:z.string(),
    email:z.string(),
    password:z.string().min(8),
    phoneNo:z.number().min(10)
})

export const PremiumUserSignIn=z.object({
    email:z.string(),
    password:z.string().min(8),
})

export const DeveloperSignUp=z.object({
    firstName:z.string(),
    lastName:z.string(),
    Role:z.string(),
    email:z.string(),
    password:z.string().min(8),
    phoneNo:z.number().min(10)
})

export const DeveloperSignIn=z.object({
    email:z.string(),
    password:z.string().min(8)
})


export type USignUp=z.infer<typeof UserSignUpInp>
export type USignIn=z.infer<typeof UserSignInInp>
export type PSignUp=z.infer<typeof PremiumUserSignUp>
export type PSignIn=z.infer<typeof PremiumUserSignIn>
export type DSignUp=z.infer<typeof DeveloperSignUp>
export type DSignIn=z.infer<typeof DeveloperSignIn>



