import { SearchReposUseCase } from "@/src/application/use-cases/search-repos.use-case";
import { GitHubApiClient } from "@/src/infrastructure/http/github-api.client";

const client = new GitHubApiClient();
const searchReposUseCase = new SearchReposUseCase(client);

export const container = new Map<string, any>([
  ["searchReposUseCase", searchReposUseCase],
]);
