import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', ()=> {
  it('matches a snapshot', () => {
    const character = shallow(<Character 
      img='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
      name='Morty Smith'
      species='Human'
    />);
    expect(character).toMatchSnapshot();
  });
});
