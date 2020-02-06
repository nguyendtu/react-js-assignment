import renderer from 'react-test-renderer';
import ListTrip from '..';

describe('Page: Trip', () => {
  it('Render correctly', () => {
    const wrapper = renderer.create(<ListTrip />);
    expect(wrapper.root.children.length).toBe(1);
    const outerLayer = wrapper.root.children[0];
    expect(outerLayer.type).toBe('div');
    expect(outerLayer.children.length).toEqual(2);
  });
});
