import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { InstitutionModule } from 'src/institution/institution.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, InstitutionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
