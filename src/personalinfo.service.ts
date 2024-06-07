import { Injectable } from '@nestjs/common';
import { CreatePersonalInfoDto } from 'dto/create-personalinfo-dto';
import { UpdatePersonalInfoDTO } from 'dto/update-personalinfo-dto.ts';
import { PrismaService } from 'database/prisma.service';

@Injectable()
export class PersonalInfoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPersonalInfoDto:CreatePersonalInfoDto) {

    return await this.prisma.personalInfo.create({
      data: {
        reference: createPersonalInfoDto.reference,
        user_id: createPersonalInfoDto.user_id,
        deleted: createPersonalInfoDto.deleted
      }
    });

  }

  async show(personal_info_id:string){

    return this.prisma.personalInfo.findUnique({
      where: {
        personal_info_id
      }
    })
  }

  async updatePartial(personal_info_id:string, data:UpdatePersonalInfoDTO) {
    return this.prisma.personalInfo.update({
      data,
      where: {
        personal_info_id
      }
    })
  }

  async delete(personal_info_id:string) {
    return this.prisma.personalInfo.delete({
      where: {
        personal_info_id
      }
    })
  }


}
