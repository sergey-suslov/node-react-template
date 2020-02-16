import { Router, Request, Response } from 'express'
import { signUpValidate, signUp } from '../controller/sign-up'

const router = Router()

router.post('/sign-in', (req: Request, res: Response) => {
  res.send('')
})

router.post('/sign-up', signUpValidate, signUp)

export default router
