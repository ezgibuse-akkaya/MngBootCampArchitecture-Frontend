
import { City } from 'src/app/core/models/enum/city';
import { Entity } from './entity';


export interface RentalBranch extends Entity {
  city: City;
}
