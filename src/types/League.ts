import type { Team } from './Team';

export type TeamsByConference = {
  Este: Team[];
  Oeste: Team[];
};

export type TeamsByDivision = {
  [key: string]: Team[];
};