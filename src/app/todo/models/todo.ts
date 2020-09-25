export interface TodoInterface {

  id: number,
  description: string
}

export class Todo implements TodoInterface {

  id;
  description;

  constructor(data) {
    this.id = data.id;
    this.description = data.description;
  }
}
