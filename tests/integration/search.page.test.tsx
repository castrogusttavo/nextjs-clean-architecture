import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import SearchPage from "@/app/search/page";
import * as controller from "@/src/interface-adapters/controllers/search.controller";

vi.mock("@/src/interface-adapters/controllers/search.controller");

describe("<SearchPage />", () => {
  it("deve exibir resultados da busca", async () => {
    vi.spyOn(controller, "searchController").mockResolvedValue([
      {
        id: 1,
        name: "test-repo",
        html_url: "https://github.com/test",
        description: "repo de teste",
      },
    ]);

    render(<SearchPage />);

    const input = screen.getByPlaceholderText("ex: nextjs");
    fireEvent.change(input, { target: { value: "next" } });

    fireEvent.click(screen.getByText("Buscar"));

    await waitFor(() => {
      expect(screen.getByText("test-repo")).toBeInTheDocument();
    });
  });
});
