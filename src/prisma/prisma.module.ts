import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()   // written global so that the db access does not needed to 
            // be done in each and every modules to access db-services.
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
