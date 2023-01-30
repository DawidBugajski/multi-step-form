import PersonalInfo from 'routes/PersonalInfo';
import SelectPlan from 'components/SelectPlan';
import PickAddons from 'components/PickAddons';
import Summary from 'components/Summary';

const routes = [
  {
    step: 1,
    path: '/personal-info',
    component: PersonalInfo,
  },
  {
    step: 2,
    path: '/select-plan',
    component: SelectPlan,
  },
  {
    step: 3,
    path: '/pick-addons',
    component: PickAddons,
  },
  {
    step: 4,
    path: '/summary',
    component: Summary,
  },
];

export default routes;
