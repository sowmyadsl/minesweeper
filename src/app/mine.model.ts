export class Mine {
  isBomb: boolean = false;
  display: number = 9;
  isClicked: boolean = false;
  clickedClass: string = 'blank';
  isFlagged: boolean = false;

  constructor(public x: number, public y: number) { }
}
