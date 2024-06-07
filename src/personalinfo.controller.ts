import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CreatePersonalInfoDto } from 'dto/create-personalinfo-dto';
import { UpdatePersonalInfoDTO } from 'dto/update-personalinfo-dto.ts';
import { PersonalInfoService } from './personalinfo.service';
;

@Controller('personal-info')
export class PersonalInfoController {

  constructor(private readonly personalInfoService: PersonalInfoService ) {}

  @Post('/create')
  async create(@Body() createPersonalInfoDto: CreatePersonalInfoDto) {
    return this.personalInfoService.create(createPersonalInfoDto);
  }

  @Get('/show/:personal_info_id')     
  async readOne(@Param('personal_info_id', ParseUUIDPipe)personal_info_id: string) {
    return this.personalInfoService.show(personal_info_id);
  }

  @Patch('/update-personal-info/:personal_info_id')   
  async updatePartial(@Body() data: UpdatePersonalInfoDTO, @Param('personal_info_id', ParseUUIDPipe)personal_info_id: string) {
    return this.personalInfoService.updatePartial(personal_info_id, data);
  }

  @Delete('/delete/personal_info_id')
  async delete(@Param('personal_info_id', ParseUUIDPipe)personal_info_id: string) {
    return this.personalInfoService.delete(personal_info_id)
  }
}
