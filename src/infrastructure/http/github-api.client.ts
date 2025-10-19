export class GitHubApiClient {
  async searchRepositories(query: string) {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}`,
    );
    if (!response.ok) throw new Error("Erro ao buscar repositórios");
    return response.json();
  }
}
