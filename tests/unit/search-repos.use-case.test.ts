import { vi } from "vitest";
import { SearchReposUseCase } from "@/src/application/use-cases/search-repos.use-case";
import { GitHubApiClient } from "@/src/infrastructure/http/github-api.client";

vi.mock("@/src/infrastructure/http/github-api.client");

describe("SearchReposUseCase", () => {
  it("deve retornar lista de repositórios mapeados corretamente", async () => {
    const fakeData = {
      items: [
        { id: 1, name: "repo-1", html_url: "url-1", description: "desc-1" },
      ],
    };

    vi.mocked(GitHubApiClient).mockImplementation(() => ({
      searchRepositories: vi.fn().mockResolvedValue(fakeData),
    }));

    const client = new GitHubApiClient();
    const useCase = new SearchReposUseCase(client);

    const result = await useCase.execute("query");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("repo-1");
  });
});
