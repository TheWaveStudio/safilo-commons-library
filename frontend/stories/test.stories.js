import TestComponent from '../components/_test/test-component';

export default {
  component: TestComponent,
  title: 'Components/TestComponent',
};

export const Primary = () => ({
  components: {TestComponent},
  template: '<TestComponent />',
});
