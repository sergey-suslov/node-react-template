import { Request, Response, NextFunction } from 'express'
import joi from '@hapi/joi'
import boom from '@hapi/boom'
import User from '../entity/User'

interface UserSignUpForm<TEmail = string, TPassword = string> {
  email: TEmail
  password: TPassword
}

type UserSignUpFormJoi = UserSignUpForm<joi.StringSchema, joi.StringSchema>

export const signUpValidate = (req: Request, res: Response, next: NextFunction): void => {
  const signUp = req.body as UserSignUpForm
  req.log.info('Sign up', signUp)
  const joiSignUp: UserSignUpFormJoi = {
    email: joi
      .string()
      .email()
      .required(),
    password: joi.string().required(),
  }

  const validator = joi.object(joiSignUp)

  try {
    validator.validate(signUp)
  } catch (error) {
    req.log.error(error)
    return next(boom.badRequest('Invalid email format or no password'))
  }
  next()
}

export const signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const signUpBody = req.body as UserSignUpForm
  try {
    await User.registerByEmail(signUpBody.email, signUpBody.password)
  } catch (error) {
    req.log.error(error)
    return next(boom.internal('Internal error, try again later'))
  }
  res.status(200).send()
}
