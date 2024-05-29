/**
 * @vitest-environment jsdom
 */

import { describe, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import Footer, { socialLogos } from "./Footer";

describe("Footer", () => {
    test("SERÁ QUE ME ESTÁ RENDERIZANDO CORRECTAMENTE LOS ELEMENTOS", () => {
        render(<Footer />);
        expect(screen.getByText("Creado con amor por Brisna Paez")).toBeInTheDocument();
    })

    test("Se están renderizando bien los logos", () => {
        render(<Footer />);
        waitFor(() => socialLogos.forEach((logo) => {
            expect(screen.getAllByAltText(logo.alt)).toBeVisible();
        }))
    })
})