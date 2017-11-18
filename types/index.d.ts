export * from 'ava'
import { RegisterContextual } from 'ava'

export interface Feature {
  (name: string): RegisterContextual<any>;
  (name: string, run: (scenario: RegisterContextual<any>) => void): void;
}

export interface BDD {
  (name: string): RegisterContextual<any>;
  (name: string, run: (it: RegisterContextual<any>) => void): void;
}

export const describe: BDD;
export const feature: Feature;
