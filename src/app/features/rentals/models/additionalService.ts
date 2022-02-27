import { Entity } from "./entity";

export interface AdditionalService extends Entity {
  name: string;
  dailyPrice: number;
}
