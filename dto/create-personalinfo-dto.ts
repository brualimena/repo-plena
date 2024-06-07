import { IsString, IsDate, IsOptional, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePersonalInfoDto {
  
  @IsString()
  user_id: string;

  @IsDate()
  @Type(() => Date)
  reference: Date;

  @IsOptional()
  @IsBoolean()
  deleted: boolean;

}
