import { Entity } from "../models/entity";


export interface AdditionalService extends Entity {
  name: string;
  dailyPrice: number;
}
