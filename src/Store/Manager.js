import {InitManagers} from "../Core/Logic/Init/InitManagers";
import {FlyersManagers} from "../Core/Logic/Flyers/FlyersManagers";



const managers = [
  /* Init */
  ...InitManagers,
  ...FlyersManagers,
  /*Insert Managers*/
];

export default managers;
