import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('Ads list SnapShot', () => {
  test('should render', () => {
    const props = {
      ads: [
        {
          _id: '5e4974c23976de16b4d34260',
          tags: ['lifestyle'],
          name: 'Babybjorn bouncer',
          price: 160,
          description: 'Modifico toda la descripción',
          type: 'sell',
          photo:
            'https://s5.eestatic.com/2015/10/03/actualidad/Actualidad_68753203_129196255_1024x576.jpg',
        },
      ],
    };
    const wrapper = shallow(<Home {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
