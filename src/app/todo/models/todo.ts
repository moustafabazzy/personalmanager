export interface TodoInterface {

  id: number,
  title: string,
  description: string
}

export class Todo implements TodoInterface {

  id;
  title;
  description;

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
  }
}
