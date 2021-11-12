import func from '../src/data.js'
import dataTest from './infotest.js'

describe('func', () => {
  it('es un objeto', () => {
    expect(typeof func).toBe('object');
  });

  describe('func.filterData', () => {
    it('es una función', () => {
      expect(typeof func.filterData).toBe('function');
    });
    
    it('retornar "2" para filtrar por mujeres', () =>{
      expect(func.filterData(dataTest, 'Female', 'none','none')).toHaveLength(2);
    });

    it('retornar "1" para filtrar por mujeres aliens', () =>{
      expect (func.filterData(dataTest, 'Female', 'Alien','none')).toHaveLength(1);
    });

    it('retornar "1" para filtrar por humanoides', () =>{
      expect (func.filterData(dataTest, 'none', 'Humanoid', 'none')).toHaveLength(1);
    });

    it('retornar "0" para filtrar por hombres enfermedad', () =>{
      expect (func.filterData(dataTest, 'Male', 'Disease', 'none')).toHaveLength(0);
    });

    it('retornar "2" para filtrar por vivo', () =>{
      expect (func.filterData(dataTest, 'none', 'none', 'Alive')).toHaveLength(2);
    });
  });
  describe('func.sortData', () => {
    it('es una función', () => {
      expect(typeof func.sortData).toBe('function');
    });

    let first=[{"gender": "Male", "id": 21, "name": "Aqua Morty", "origin": {"name": "unknown"}, "species": "Humanoid", "status": "unknown", "type": "Fish-Person"}, {"gender": "Female", "id": 26, "name": "Arthricia", "origin": {"name": "Purge Planet"}, "species": "Alien", "status": "Alive", "type": "Cat-Person"}, {"gender":
    "Female", "id": 3, "name": "Summer Smith", "origin": {"name": "Earth (Replacement Dimension)"}, "species": "Human", "status": "Alive", "type": ""}]
    
    let last=[{"gender": "Female", "id": 3, "name": "Summer Smith", "origin": {"name": "Earth (Replacement Dimension)"}, "species": "Human", "status": "Alive", "type": ""}, {"gender": "Female", "id": 26, "name": "Arthricia", "origin": {"name": "Purge Planet"}, "species": "Alien", "status": "Alive", "type": "Cat-Person"}, {"gender": "Male", "id": 21, "name": "Aqua Morty", "origin": {"name": "unknown"}, "species": "Humanoid", "status": "unknown", "type": "Fish-Person"}]

    let relevance=[{"gender": "Female", "id": 3, "name": "Summer Smith", "origin": {"name": "Earth (Replacement Dimension)"}, "species": "Human", "status": "Alive", "type": ""}, {"gender": "Male", "id": 21, "name": "Aqua Morty", "origin": {"name": "unknown"}, "species": "Humanoid", "status": "unknown", "type": "Fish-Person"}, {"gender": "Female", "id": 26, "name": "Arthricia", "origin": {"name": "Purge Planet"}, "species": "Alien", "status": "Alive", "type": "Cat-Person"}]
    
    it('resultado de ascendente igual a let first', () =>{
      expect(func.sortData(dataTest, 'ascend')).toStrictEqual(first);
    });

    it('resultado de descendente igual a let last', () =>{
      expect(func.sortData(dataTest, 'descend')).toStrictEqual(last);
    });

    it('resultado de none igual a let relevance', () =>{
      expect(func.sortData(dataTest, 'none')).toStrictEqual(relevance);
    });  
  })
})