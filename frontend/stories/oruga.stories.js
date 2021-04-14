import OrugaComponent from '../components/_test/oruga-component';

export default {
  component: OrugaComponent,
  title: 'Components/OrugaComponent',
};

export const Oruga = () => ({
  components: {OrugaComponent},
  template: '<OrugaComponent />',
});
