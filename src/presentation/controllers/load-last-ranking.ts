import { LastRankingLoader } from '@/domain/usecases'
import {
  Controller,
  HttpResponse,
  serverError,
  ok
} from '@/presentation/contracts'
import { RankingScoreViewModel } from '@/presentation/view-models'

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastrankingLoader: LastRankingLoader) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastrankingLoader.load()

      return ok(RankingScoreViewModel.mapCollection(ranking))
    } catch (error) {
      return serverError(error)
    }
  }
}
