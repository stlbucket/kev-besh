// src/modules/authen.ts
import { Elysia, t } from 'elysia'

const authModel = (app: Elysia) =>
 app
 .model({ 
   signInWithPassword: t.Object({ 
       email: t.String({ 
           format: 'email' 
       }), 
       password: t.String({ 
           minLength: 8 
       }) 
   }) 
 }) 
 .model({ 
   signInWithOtp: t.Object({ 
       email: t.String({ 
         format: 'email'
       })
   }) 
 }) 

export { authModel }