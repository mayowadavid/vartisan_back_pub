import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EmployeeCreatedDTO {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  designation: string;

  @Field()
  city: string;

  @Field()
  projectId: string;
}
