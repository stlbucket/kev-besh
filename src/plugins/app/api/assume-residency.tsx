import { Elysia, t } from 'elysia'
import { assumeResidency } from '../database/mutation'

const AssumeResidency = (app: Elysia) =>
  app
    .model({ 
      assumeResidency: t.Object({ 
        id: t.String()
      }) 
    }) 
    .post(
      '/assume-residency',
      async (context) => {
        const result = await assumeResidency(context)
        context.set.redirect = '/'
      },
      {
        body: 'assumeResidency'
      }
    )

export { AssumeResidency }