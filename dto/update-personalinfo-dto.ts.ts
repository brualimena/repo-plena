import { IsBoolean, IsOptional, IsDate, IsString, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class UpdatePersonalInfoDTO{
    
    @IsOptional()
    @IsDate({ message: 'A data do último ciclo deve ser uma data válida'})
    @Type(() => Date)
    last_period?: Date;

    @IsOptional()
    @IsString({ message: 'O status do ciclo menstrual deve ser uma string'})
    menstrual_cycle_status?: string;

    @IsOptional()
    @IsNumber({}, {message: 'O peso deve ser um número'})
    @Type(() => Number)
    weight?: number;

    @IsOptional()
    @IsNumber({},{message: 'A altura deve ser um número'})
    @Type(() => Number)
    height?: number;

    @IsOptional()
    @IsNumber({}, {message:'A circunferência abdominal deve ser um número'})
    @Type(() => Number)
    waist_circumference?: number;

    @IsOptional()
    @IsNumber({}, {message: 'O valor de FSH deve ser um número'})
    @Type(() => Number)
    fsh_value?: number;

    @IsOptional()
    @IsString({message: 'A unidade de FSH deve ser uma string'})
    fsh_unit?: string;

    @IsOptional()
    @IsNumber({},{message: 'O valor de estradiol deve ser um número'})
    @Type(() => Number)
    estradiol_value?: number;

    @IsOptional()
    @IsString({message: 'A unidade de estradiol deve ser uma string'})
    estradiol_unit?: string;

    @IsOptional()
    @IsBoolean()
    @Type(() => Boolean)
    deleted?: boolean;

} 
  