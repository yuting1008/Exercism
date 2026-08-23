// // @ts-check

// /**
//  * Implement the classes etc. that are needed to solve the
//  * exercise in this file. Do not forget to export the entities
//  * you defined so they are available for the tests.
//  */
// export class Size{
//   constructor(){
//     this.width = 80;
//     this.height = 60;
//   }

//   resize(newWidth, newHeight){
//     this.width = newWidth;
//     this.height = newHeight;
//   }
// }

// export class Position{
//   constructor(){
//     this.x = 0;
//     this.y = 0;
//   }

//   move(newX, newY){
//     this.width = newX;
//     this.height = newY;
//   }
// }

// export class ProgramWindow{
//   constructor(){
//     this.screenSize = new Size(800, 600);
//     this.size = new Size();
//     this.position = new Position();
//   }

//   resize(newSize) {
//     const maxWidth = this.screenSize.width - this.position.x;
//     const maxHeight = this.screenSize.height - this.position.y;

//     let width = Math.max(1, newSize.width);
//     let height = Math.max(1, newSize.height);

//     width = Math.min(width, maxWidth);
//     height = Math.min(height, maxHeight);

//     this.size.resize(width, height);
//   }

//   move(newPosition) {
//     const maxX = this.screenSize.width - this.size.width;
//     const maxY = this.screenSize.height - this.size.height;

//     let x = Math.max(0, newPosition.x);
//     let y = Math.max(0, newPosition.y);

//     x = Math.min(x, maxX);
//     y = Math.min(y, maxY);

//     this.position.move(x, y);
// }

// ---------------------------------------------------------------------------
// Task 1: Size (prototype syntax)
// ---------------------------------------------------------------------------

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

// ---------------------------------------------------------------------------
// Task 2: Position (prototype syntax)
// ---------------------------------------------------------------------------

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

// ---------------------------------------------------------------------------
// Tasks 3-5: ProgramWindow (class syntax)
// ---------------------------------------------------------------------------

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    let width = Math.max(1, newSize.width);
    let height = Math.max(1, newSize.height);

    width = Math.min(width, maxWidth);
    height = Math.min(height, maxHeight);

    this.size.resize(width, height);
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    let x = Math.max(0, newPosition.x);
    let y = Math.max(0, newPosition.y);

    x = Math.min(x, maxX);
    y = Math.min(y, maxY);

    this.position.move(x, y);
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));

  return programWindow;
}