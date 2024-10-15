import { render,screen } from "@testing-library/react";
import { vi, describe, it, expect } from 'vitest';
import Product from "../Product";

describe('Funciones dentro del componente Producto', () => {
    describe('Renders product component correctly', async () => {
        it('Should render the component correctly', async () => {
            // Setup
            render(<Product />);
        });
    });
    
})
