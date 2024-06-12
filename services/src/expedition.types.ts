export type Expedition = {
  name: string;
  id: string;
  destination: string;
  departure: string;
  members: Members[];
};

export type Members = Pilot | Engineer | Passenger;

export enum MemberTypes {
  pilot = 'Pilot',
  engineer = 'Engineer',
  passenger = 'Passenger',
}

export type Pilot = {
  type: MemberTypes.pilot;
  experience: number;
};

export type Engineer = {
  type: MemberTypes.engineer;
  experience: number;
  job: Jobs;
};

export type Passenger = {
  type: MemberTypes.passenger;
  wealth: number;
  age: number;
};

export enum Jobs {
  navigation = 'Navigation',
  solarPanels = 'Solar Panels',
  maintenance = 'Maintenance',
  mechanics = 'Mechanics',
}
