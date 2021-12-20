/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from "@nestjs/config";

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.setGlobalPrefix(config.get("prefix"));
  await app.listen(config.get("port"));
  Logger.log("Listening at http://localhost:" + config.get("port") + "/" + config.get("prefix"));
  Logger.log(`Running in ${config.get("environment")} mode`);
}

bootstrap();
