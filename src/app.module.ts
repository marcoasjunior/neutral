import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { TypegooseModule } from 'nestjs-typegoose';
import { ClientsModule } from './clients/clients.module';
import { CompaniesModule } from './companies/companies.module';
import { HealthController } from './health/health.controller';
import { IntegrationsModule } from './integrations/integrations.module';
import { LocationsModule } from './locations/locations.module';
import { OperatorsModule } from './operators/operators.module';
import { PartnersModule } from './partners/partners.module';
import { PartnershipsModule } from './partnerships/partnerships.module';
import { PendenciesModule } from './pendencies/pendencies.module';
import { PortAuditsModule } from './port-audits/port-audits.module';
import { PortsModule } from './ports/ports.module';
import { RegionsModule } from './regions/regions.module';
import { UsersModule } from './users/users.module';


@Module({
    
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    UsersModule, 
    TerminusModule, 
    CompaniesModule, 
    OperatorsModule, 
    PartnersModule, 
    PartnershipsModule, 
    LocationsModule, 
    ClientsModule, 
    PortsModule, 
    PendenciesModule, 
    PortAuditsModule, 
    IntegrationsModule, 
    RegionsModule
],
  controllers: [HealthController],
  providers: [],

})

export class AppModule {}
