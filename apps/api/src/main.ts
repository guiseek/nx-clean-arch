import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { INestApplication, Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

function setupSwagger(app: INestApplication, apiPrefix = 'api') {
  const config = new DocumentBuilder()
    .setTitle('Nx Clean Arch')
    .setDescription('API Rest Nx Clean Arch')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(apiPrefix, app, document)
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  setupSwagger(app, globalPrefix);

  const port = process.env.PORT || 3333
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
}

bootstrap()
