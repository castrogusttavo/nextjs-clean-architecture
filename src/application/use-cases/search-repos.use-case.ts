import type { Repository } from "@/src/domain/entities/repository";
import type { GitHubApiClient } from "@/src/infrastructure/http/github-api.client";

export class SearchReposUseCase {
  constructor(private readonly client: GitHubApiClient) {}

  async execute(query: string): Promise<Repository[]> {
    const data = await this.client.searchRepositories(query);
    return data.items.map((r: any) => ({
      id: r.id,
      name: r.name,
      html_url: r.html_url,
      description: r.description,
    }));
  }
}
