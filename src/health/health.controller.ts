import { Controller, Dependencies, Get } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus';

@Controller('health')
@Dependencies(HealthCheckService, HttpHealthIndicator)

export class HealthController {
    constructor(
        private health,
        private http,
    ) {}

    @Get()
    @HealthCheck()
    healthCheck() {
        return this.health.check([
            async () => this.http.pingCheck('local', 'http://localhost:3000/users'),
        ])
    }
}