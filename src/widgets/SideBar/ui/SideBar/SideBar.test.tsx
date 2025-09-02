import { fireEvent, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslations/renderWithTranslation";

describe("Sidebar", () => {
    test("with only first param", () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("test toggle", () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        screen.debug()
        fireEvent.click(toggleBtn);
        screen.debug()
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
