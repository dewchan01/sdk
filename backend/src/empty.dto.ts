import { ApiProperty } from '@nestjs/swagger';

// What is this?  Well, it is mostly unused.  Turns out that the Todo App has zero DTO's.  And when the SDK is generated, it generates an empty models.ts file.
//    And that is a compiler error.
// So this is ONLY here to  provide a single DTO so that models.ts is not empty.  Once you add any other "real" DTO's:
//    this file can be removed
//    and the ExtraModels in app.controller.ts can be removed
export class EmptyDto {
  @ApiProperty()
  public readonly nothing!: string;
}
