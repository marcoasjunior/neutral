import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    UsersModule, 
    TerminusModule
],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
