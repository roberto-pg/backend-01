import { makeLoadLastRankingController } from '@/main/factories'
import { adaptResolver } from '../../adapters/apollo-server-resolver'

export default {
  Query: {
    lastRanking: async (): Promise<any> =>
      adaptResolver(makeLoadLastRankingController())
  }
}
