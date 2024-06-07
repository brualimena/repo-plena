import { Module } from '@nestjs/common';
import { PersonalInfoController } from './personalinfo.controller';
import { PersonalInfoService } from './personalinfo.service';
import { PrismaModule } from 'database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PersonalInfoController],
  providers: [PersonalInfoService],
  exports: [PersonalInfoService]
})
export class PersonalInfoModule{}