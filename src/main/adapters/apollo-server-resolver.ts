import { Controller } from '@/presentation/contracts/controller'

export const adaptResolver = async (controller: Controller): Promise<any> => {
  const httpResponse = await controller.handle()
  return httpResponse.data
}
