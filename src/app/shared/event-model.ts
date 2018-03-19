export class EventModel {
  id: number;
  name: string;
  date: string; // ez csak az egyszerűség kedvéért
  pictureURL: string;
  description: string;
  constructor(param: EventModel) {
    if (param) {
      Object.assign(this, param);
    }
  }
}
