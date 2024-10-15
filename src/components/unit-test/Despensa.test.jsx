import { describe, it, expect} from 'vitest';
import { render,screen } from "@testing-library/react";
import Despensa from "../Despensa";

describe('Funciones dentro del componente despensa', () => {

   describe('addItem', () => {
      it('should add an item to the list', () => {
         const startItems = [
            { id: 1, text: 'papas', available: true },
            { id: 2, text: 'tomates', available: true }
         ]

         const newItem = { id: 3, text: 'arroz', available: true }
         const expected = [
            { id: 1, text: 'papas', available: true },
            { id: 2, text: 'tomates', available: true },
            { id: 3, text: 'arroz', available: true }
         ]
         const add = vitest.fn();
         const { testAdd } = render(<Despensa add={add(startItems, newItem)} />);

         const result = testAdd;
         expect(result).toEqual(expected);
     
      })
   });
   describe('deleteItem', () => {
      it('should remove an item to the list', () => {
         const startItems = [
            { id: 1, text: 'papas', available: true },
            { id: 2, text: 'tomates', available: true },
            { id: 3, text: 'arroz', available: true }
         ]

         const newItem = { id: 3, text: 'arroz', available: true }
         const expected = [
            { id: 1, text: 'papas', available: true },
            { id: 2, text: 'tomates', available: true },
           
         ]
            const result = deleteItem(startItems, newItem);
            expect(result).toEqual(expected);
      })
   });
})