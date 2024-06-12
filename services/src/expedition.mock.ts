import type { Expedition } from './expedition.types';

const d = '2024-06-06T04:03:37.580Z';

const mock: Expedition[] = [
  {
    id: '1',
    name: 'exp 1',
    departure: d,
    destination: 'Mars',
    members: [],
  },
  {
    id: '2',
    name: 'Exp 2',
    departure: d,
    destination: 'Mars',
    members: [],
  },
];

export default mock;
