---
title: NestJS 学习之路
description: 深入分析优秀的 NestJS 项目，介绍常用的 Nest 内置模块，解锁 NestJS 的高级特性和最佳实践
date: 2024-10-19T10:00:00.000+08:00
lang: zh
type: note
duration: 25min
---

# 前言

注：本文仅供笔者学习记录，笔者能力有限，仅供参考。

# 整体架构 & 名词解释

在深入 NestJS 的各种模块和功能之前，了解常见优秀项目的整体架构和相关名词是非常重要的。这不仅有助于你更好地理解框架的工作原理，还能让你在开发过程中做出更加明智的决策。

## 目录结构

```
prisma // 数据库相关
src
├─ auth // 授权登陆模块
│ ├─ auth.controller.ts
│ ├─ auth.guard.ts // 守卫
│ ├─ auth.interface.ts // 存放局部的该模块的类型声明
│ ├─ auth.module.ts
│ ├─ auth.service.ts
│ ├─ dto
│ │ ├─ sign-in.dto.ts
│ ├─ entities
│ │ └─ refresh-token.entity.ts
├─ common // 全局通用模块
| ├─ configs // 全局配置
| ├─ constants // 定义一些常量
| ├─ decorators // 全局装饰器
| ├─ filters // 全局过滤器
| ├─ interceptors // 全局拦截器
| ├─ interfaces // 全局类型声明
| ├─ services // 全局公共服务
| ├─ * // 其他
├─ utils // 工具函数, 尽量存放纯函数
├─ app.*.ts // app 模块, 其他 module 需要引用到 app module
├─ main.ts // 应用入口
```

以一个用户授权模块为例，通常能看到这些文件，而他们的用途如下：

- `*.module.ts` : 通常是模块文件，用于组织和管理控制器、服务、守卫等。它是 Nest.js 应用程序的**基础单元**。
- `*.service.ts` : Service 层通常用于处理模块的业务逻辑。它们通常被注入到**控制器**（controller）中，并可以访问数据库、执行计算等。
- `*.controller.ts` : 控制器文件用于处理 HTTP 请求和响应。它们通常依赖于 Service 来执行业务逻辑。
- `*.guard.ts` : 守卫文件用于实现**路由保护**，例如身份验证和授权。
- `*.interface.ts` : 接口文件用于定义局部用到的类型和数据结构，以确保代码的健壮性。（ts 声明等）
- `*.dto.ts` : 数据传输对象（DTO）用于验证客户端发送的数据。
- `*.entity.ts` : 实体文件用于定义数据库模型。

其中一些名词的简单解释如下：

- **DTO（Data Transfer Object）**: 数据传输对象，用于在对象和 API 之间传输数据。
- **Guard**: 守卫，用于实现权限控制和访问验证。
- **Module**: 模块，NestJS 的基本组织单位，用于组织和管理控制器、服务等。
- **Service**: 服务，包含主要的业务逻辑，通常被注入到控制器中。
- **Entity**: 实体，用于定义数据库模型，通常与 ORM（对象关系映射）一起使用。
- **Interceptor**: 拦截器在 NestJS 中是一个用 `@Injectable()` 装饰器注释的类，并实现 `NestInterceptor` 接口。拦截器用于在函数执行之前或之后执行一些操作，例如日志记录、异常处理、数据转换等。
- **Reflector**: Reflector 主要用于元数据的反射和操作。在拦截器中，Reflector 可以用于获取方法或类上设置的自定义元数据，从而允许更灵活的操作。

通过以上的目录结构和名词解释，我希望能为你提供一个清晰的视角，以更全面地理解 NestJS 的架构和设计理念。接下来，我们将深入探讨这些概念，并通过实际的代码示例来展示它们是如何在 NestJS 项目中应用的。

## Module

1. **根模块**：每个 Nest.js 应用程序都有一个根模块，它是 Nest 用于构建应用程序图 （**application graph**）的起点。这个图用于解析模块与提供者（Providers）之间的关系和依赖。
2. **组织组件**：模块是组织和管理组件（如控制器、服务等）的有效方式。通过模块，你可以将密切相关的功能组合在一起。
3. **多模块架构**：对于大型应用程序，通常会采用多模块架构。每个模块都封装了一组特定的、密切相关的功能。

```typescript
// 引入 Nest.js 核心模块
import { Module } from '@nestjs/common'
// 引入其他相关组件
import { AppController } from './app.controller'
import { AppService } from './app.service'

// 使用 @Module 装饰器定义模块
@Module({
  // 导入其他模块
  imports: [],
  // 声明该模块的控制器
  controllers: [AppController],
  // 声明该模块的提供者（通常是服务）
  providers: [AppService],
})
export class AppModule {}
```

### 推荐阅读

1. Modules | NestJS - A progressive Node.js framework
2. 深入了解 Nest 的模块 Module - 掘金

## Service 层（服务层）

在软件架构中，通常会有几个不同的层来组织代码和功能。这些层有助于实现关注点分离（Separation of Concerns），使得代码更易于维护和扩展。在本例中，我们主要关注以下几个层：Service 层和 Controller 层，至于 DAO 层：

> 无论是 nest 还是 egg，官方 demo 里都没有明确提到 dao 层，直接在 service 层操作数据库了。这对于简单的业务逻辑没问题，如果业务逻辑变得复杂，service 层的维护将会变得非常困难。业务一开始一般都很简单，它一定会向着复杂的方向演化，如果从长远考虑，一开始就应该保留 dao。

Service 层主要负责**业务逻辑的实现**。这一层通常会**与数据库进行交互**，执行 CRUD（创建、读取、更新、删除）操作，以及执行其他与业务逻辑相关的任务。

例如，一个名为 `UserService` 的服务可能有一个 `registerUser` 方法，该方法接收一个 `LoginUserDto` 对象，验证数据，并将新用户添加到数据库中。

```typescript
import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { LoginUserDto } from './dto/LoginUserDto'

@Injectable()
export class AuthService {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async registerUser(dto: LoginUserDto): Promise<void> {
    await this.prisma.user.create({
      data: {
        userName: dto.userName,
        password: dto.password,
      },
    })
  }
}
```

### 推荐阅读

1. NestJS - Services
2. nest 后端开发实战（二）—— 分层 - 知乎
3. 浅谈 NestJS 设计思想（分层、IOC、AOP） - 掘金

### Controller 层（控制器层）

Controller 层负责处理 HTTP 请求，是客户端与业务逻辑之间的桥梁。

**核心职责：**

- **路由定义**：映射 URL 到具体的处理方法
- **参数验证**：验证请求参数的格式和有效性
- **响应格式化**：统一响应数据的格式

```typescript
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto)
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.findById(id)
  }
}
```

### DTO（数据传输对象）

DTO 是数据在不同层之间传输的载体，它不仅定义了数据结构，还承担着数据验证的重要职责。

**使用优势：**

- **类型安全**：提供编译时类型检查
- **数据验证**：自动验证请求数据的有效性
- **文档生成**：配合 Swagger 自动生成 API 文档

```typescript
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'john_doe' })
  @IsString()
  @IsNotEmpty()
  username: string

  @ApiProperty({ description: '邮箱地址', example: 'john@example.com' })
  @IsEmail()
  email: string

  @ApiProperty({ description: '密码', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string
}
```

**验证装饰器说明：**

- `@IsString()`：确保字段为字符串类型
- `@IsEmail()`：验证邮箱格式
- `@IsNotEmpty()`：确保字段不为空
- `@MinLength(n)`：设置最小长度限制

更多验证规则请参考：[class-validator 官方文档](https://github.com/typestack/class-validator)

### Entity（实体模型）

Entity 定义了数据库表的结构和关系，是 ORM 框架与数据库交互的基础。

**TypeORM 示例：**

```typescript
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 50, unique: true })
  username: string

  @Column({ length: 100, unique: true })
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  createdAt: Date
}
```

**Prisma 示例：**

```typescript
// 对于 Prisma，实体通常是简单的类型定义
export class User {
  id: string
  username: string
  email: string
  password: string
  createdAt: Date
}
```

> 📝 **注意**：Prisma 的实际模型定义在 `schema.prisma` 文件中，TypeScript 类型是自动生成的。

## 高级特性详解

### Guard（路由守卫）

Guard 是 NestJS 中实现访问控制的核心机制，它在路由处理器执行之前进行权限验证。

**实现原理：**

- 实现 `CanActivate` 接口
- 返回 `boolean` 或 `Promise<boolean>` 来决定是否允许访问
- 可以访问执行上下文获取请求信息

```typescript
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)

    if (!token) {
      throw new UnauthorizedException('访问令牌缺失')
    }

    try {
      const payload = await this.jwtService.verifyAsync(token)
      request.user = payload
      return true
    }
    catch (error) {
      throw new UnauthorizedException('无效的访问令牌')
    }
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
```

**使用方式：**

```typescript
@Controller('protected')
@UseGuards(AuthGuard)
export class ProtectedController {
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
```

### Interceptor（拦截器）

拦截器提供了在方法执行前后添加额外逻辑的能力，常用于日志记录、数据转换、异常处理等场景。

**基础日志拦截器：**

```typescript
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name)

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest()
    const method = request.method
    const url = request.url
    const startTime = Date.now()

    this.logger.log(`开始处理 ${method} ${url}`)

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - startTime
        this.logger.log(`完成处理 ${method} ${url} - 耗时: ${duration}ms`)
      })
    )
  }
}
```

**响应数据转换拦截器：**

首先定义响应接口和装饰器：

```typescript
import { SetMetadata } from '@nestjs/common'

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
  timestamp: number
}

export const RAW_RESPONSE_KEY = 'raw-response'
export const RawResponse = () => SetMetadata(RAW_RESPONSE_KEY, true)
```

然后实现转换拦截器：

```typescript
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class ResponseTransformInterceptor<T>
implements NestInterceptor<T, ApiResponse<T> | T> {
  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<T>
  ): Observable<ApiResponse<T> | T> {
    const isRawResponse = this.reflector.getAllAndOverride<boolean>(
      RAW_RESPONSE_KEY,
      [context.getHandler(), context.getClass()]
    )

    return next.handle().pipe(
      map(data =>
        isRawResponse
          ? data
          : {
              code: 200,
              message: '操作成功',
              data,
              timestamp: Date.now(),
            }
      )
    )
  }
}
```

**全局注册拦截器：**

```typescript
import { Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
```

### Reflector（元数据反射）

Reflector 是 NestJS 中用于读取元数据的工具类，它在自定义装饰器和拦截器中发挥重要作用。

**使用场景：**

- 权限控制：读取角色或权限元数据
- 响应处理：控制数据格式化方式
- 缓存策略：根据元数据决定缓存行为

**角色权限示例：**

```typescript
import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'roles'
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)

// 在守卫中使用
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    )

    if (!requiredRoles) {
      return true // 没有角色要求，允许访问
    }

    const request = context.switchToHttp().getRequest()
    const user = request.user

    return requiredRoles.some(role => user.roles?.includes(role))
  }
}

// 使用装饰器
@Controller('admin')
export class AdminController {
  @Get('users')
  @Roles('admin', 'moderator')
  @UseGuards(AuthGuard, RolesGuard)
  getAllUsers() {
    return this.userService.findAll()
  }
}
```

## NestJS 核心模块详解

以下是从众多优秀项目中总结出的常用 NestJS 内置模块及其应用场景：

### @nestjs/core

**功能描述：** NestJS 框架的核心模块，提供应用启动和基础功能。

**主要用途：**

- 应用实例创建和配置
- 依赖注入容器管理
- 模块系统支持

```typescript
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // 全局验证管道
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))

  // 启用 CORS
  app.enableCors()

  await app.listen(3000)
}
bootstrap()
```

### @nestjs/jwt

**功能描述：** 提供 JWT（JSON Web Token）支持，用于身份验证和授权。

**应用场景：**

- 用户身份验证
- API 访问控制
- 无状态会话管理

```typescript
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateTokens(user: User) {
    const payload = {
      sub: user.id,
      username: user.username,
      roles: user.roles
    }

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '15m',
    })

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    })

    return { accessToken, refreshToken }
  }

  async verifyToken(token: string) {
    try {
      return this.jwtService.verify(token)
    }
    catch (error) {
      throw new UnauthorizedException('令牌验证失败')
    }
  }
}
```

### @nestjs/config

**功能描述：** 配置管理模块，支持环境变量、配置文件等多种配置方式。

**最佳实践：**

- 类型安全的配置
- 环境特定配置
- 配置验证

```typescript
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

// 配置接口定义
interface DatabaseConfig {
  host: string
  port: number
  username: string
  password: string
  database: string
}

@Injectable()
export class DatabaseService {
  constructor(private configService: ConfigService) {}

  getDatabaseConfig(): DatabaseConfig {
    return {
      host: this.configService.get<string>('DB_HOST', 'localhost'),
      port: this.configService.get<number>('DB_PORT', 5432),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
    }
  }

  getJwtSecret(): string {
    const secret = this.configService.get<string>('JWT_SECRET')
    if (!secret) {
      throw new Error('JWT_SECRET 环境变量未设置')
    }
    return secret
  }
}
```

### @nestjs/axios

**功能描述：** HTTP 客户端模块，基于 Axios 封装，用于发起外部 API 请求。

**增强实现：**

```typescript
import { HttpService } from '@nestjs/axios'
import { Injectable, Logger } from '@nestjs/common'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Observable, throwError } from 'rxjs'
import { catchError, tap, timeout } from 'rxjs/operators'

@Injectable()
export class EnhancedHttpService {
  private readonly logger = new Logger(EnhancedHttpService.name)

  constructor(private httpService: HttpService) {}

  get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Observable<AxiosResponse<T>> {
    this.logger.log(`发起 GET 请求: ${url}`)

    return this.httpService.get<T>(url, config).pipe(
      timeout(10000), // 10秒超时
      tap((response) => {
        this.logger.log(`GET 请求成功: ${url} - 状态码: ${response.status}`)
      }),
      catchError((error) => {
        this.logger.error(`GET 请求失败: ${url}`, error.message)
        return throwError(() => new Error(`外部服务请求失败: ${error.message}`))
      })
    )
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Observable<AxiosResponse<T>> {
    this.logger.log(`发起 POST 请求: ${url}`)

    return this.httpService.post<T>(url, data, config).pipe(
      timeout(15000), // 15秒超时
      tap((response) => {
        this.logger.log(`POST 请求成功: ${url} - 状态码: ${response.status}`)
      }),
      catchError((error) => {
        this.logger.error(`POST 请求失败: ${url}`, error.message)
        return throwError(() => new Error(`外部服务请求失败: ${error.message}`))
      })
    )
  }
}
```

### @nestjs/cache-manager

**功能描述：** 缓存管理模块，支持内存、Redis 等多种缓存存储。

**实际应用：**

```typescript
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager'
import { Controller, Get, Module, UseInterceptors } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import * as redisStore from 'cache-manager-redis-store'

// 模块配置
@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        ttl: 300, // 5分钟默认过期时间
      }),
      inject: [ConfigService],
    }),
  ],
})
export class CacheConfigModule {}

// 控制器使用
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  async findAll() {
    // 结果会被自动缓存
    return this.postsService.findAll()
  }

  @Get('popular')
  @UseInterceptors(CacheInterceptor)
  async getPopularPosts() {
    // 热门文章缓存更长时间
    return this.postsService.getPopularPosts()
  }
}
```

### @nestjs/schedule

**功能描述：** 任务调度模块，用于执行定时任务和周期性作业。

**实用示例：**

```typescript
import { Injectable, Logger } from '@nestjs/common'
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule'

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name)

  // 每天凌晨2点执行数据备份
  @Cron('0 2 * * *')
  async handleDailyBackup() {
    this.logger.log('开始执行每日数据备份任务')
    try {
      await this.performBackup()
      this.logger.log('每日数据备份任务完成')
    }
    catch (error) {
      this.logger.error('数据备份失败', error)
    }
  }

  // 每5分钟清理过期缓存
  @Cron(CronExpression.EVERY_5_MINUTES)
  async cleanExpiredCache() {
    this.logger.debug('清理过期缓存')
    await this.cacheService.cleanup()
  }

  // 应用启动10秒后执行初始化
  @Timeout(10000)
  async handleStartupTasks() {
    this.logger.log('执行应用启动初始化任务')
    await this.initializeApplication()
  }

  // 每30秒检查系统健康状态
  @Interval(30000)
  async healthCheck() {
    const status = await this.checkSystemHealth()
    if (!status.healthy) {
      this.logger.warn('系统健康检查异常', status)
    }
  }

  private async performBackup() {
    // 备份逻辑实现
  }

  private async initializeApplication() {
    // 初始化逻辑实现
  }

  private async checkSystemHealth() {
    // 健康检查逻辑实现
    return { healthy: true }
  }
}
```

### @nestjs/swagger

**功能描述：** API 文档生成模块，基于 OpenAPI 规范自动生成交互式文档。

**完整配置：**

```typescript
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Swagger 配置
  const config = new DocumentBuilder()
    .setTitle('API 文档')
    .setDescription('项目 API 接口文档')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: '输入 JWT 令牌',
        in: 'header',
      },
      'JWT-auth'
    )
    .addTag('用户管理', '用户相关接口')
    .addTag('文章管理', '文章相关接口')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })

  await app.listen(3000)
}
bootstrap()
```

**DTO 文档注解：**

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum, IsOptional, IsString } from 'class-validator'

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator',
}

export class CreateUserDto {
  @ApiProperty({
    description: '用户名',
    example: 'john_doe',
    minLength: 3,
    maxLength: 20,
  })
  @IsString()
  username: string

  @ApiProperty({
    description: '用户邮箱',
    example: 'john@example.com',
    format: 'email',
  })
  @IsString()
  email: string

  @ApiPropertyOptional({
    description: '用户角色',
    enum: UserRole,
    default: UserRole.USER,
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole
}
```

### @nestjs/throttler

**功能描述：** 请求限流模块，防止 API 被恶意调用或过度使用。

**配置和使用：**

```typescript
import { Controller, Get, Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'

// 自定义限流配置
import { SkipThrottle, Throttle } from '@nestjs/throttler'

// 模块配置
@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60, // 时间窗口（秒）
      limit: 10, // 限制次数
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

@Controller('api')
export class ApiController {
  @Get('public')
  @SkipThrottle() // 跳过限流
  getPublicData() {
    return { message: '公开数据' }
  }

  @Get('sensitive')
  @Throttle(5, 60) // 1分钟内最多5次请求
  getSensitiveData() {
    return { message: '敏感数据' }
  }

  @Get('upload')
  @Throttle(2, 300) // 5分钟内最多2次上传
  uploadFile() {
    return { message: '文件上传' }
  }
}
```

## 常用第三方库集成

### class-validator & class-transformer

**功能描述：** 数据验证和转换库，与 NestJS 深度集成。

**高级验证示例：**

```typescript
import { Transform, Type } from 'class-transformer'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator'

export class AddressDto {
  @IsString()
  street: string

  @IsString()
  city: string

  @IsString()
  @Matches(/^\d{6}$/, { message: '邮政编码必须是6位数字' })
  zipCode: string
}

export class CreateUserDto {
  @IsString()
  @Transform(({ value }) => value.trim().toLowerCase())
  username: string

  @IsEmail({}, { message: '请输入有效的邮箱地址' })
  email: string

  @IsOptional()
  @IsDateString({}, { message: '请输入有效的日期格式' })
  birthDate?: string

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto

  @IsArray()
  @ArrayMinSize(1, { message: '至少需要一个标签' })
  @IsString({ each: true })
  tags: string[]

  @IsEnum(['active', 'inactive'], {
    message: '状态必须是 active 或 inactive',
  })
  status: string
}
```

### Prisma ORM 集成

**功能描述：** 现代化的数据库 ORM，提供类型安全的数据库访问。

**服务层实现：**

```typescript
import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { CreateUserDto, UpdateUserDto } from './dto'
import { PrismaService } from './prisma.service'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: await this.hashPassword(createUserDto.password),
        },
        include: {
          profile: true,
          posts: {
            select: {
              id: true,
              title: true,
              createdAt: true,
            },
          },
        },
      })
    }
    catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('用户名或邮箱已存在')
        }
      }
      throw error
    }
  }

  async findMany(params: {
    skip?: number
    take?: number
    cursor?: Prisma.UserWhereUniqueInput
    where?: Prisma.UserWhereInput
    orderBy?: Prisma.UserOrderByWithRelationInput
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        profile: true,
        _count: {
          select: {
            posts: true,
            followers: true,
          },
        },
      },
    })
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
        posts: true,
      },
    })

    if (!user) {
      throw new NotFoundException(`用户 ID ${id} 不存在`)
    }

    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.findById(id) // 确保用户存在

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      include: {
        profile: true,
      },
    })
  }

  async remove(id: string): Promise<void> {
    await this.findById(id) // 确保用户存在

    await this.prisma.user.delete({
      where: { id },
    })
  }

  private async hashPassword(password: string): Promise<string> {
    // 密码加密逻辑
    return password
  }
}
```

### Redis 集成

**功能描述：** 高性能缓存和会话存储解决方案。

**Redis 服务封装：**

```typescript
import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import Redis from 'ioredis'

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly redis: Redis

  constructor(private configService: ConfigService) {
    this.redis = new Redis({
      host: this.configService.get('REDIS_HOST', 'localhost'),
      port: this.configService.get('REDIS_PORT', 6379),
      password: this.configService.get('REDIS_PASSWORD'),
      retryDelayOnFailover: 100,
      maxRetriesPerRequest: 3,
    })
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    const serializedValue = JSON.stringify(value)
    if (ttl) {
      await this.redis.setex(key, ttl, serializedValue)
    }
    else {
      await this.redis.set(key, serializedValue)
    }
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key)
    return value ? JSON.parse(value) : null
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key)
  }

  async exists(key: string): Promise<boolean> {
    const result = await this.redis.exists(key)
    return result === 1
  }

  async setHash(key: string, field: string, value: any): Promise<void> {
    await this.redis.hset(key, field, JSON.stringify(value))
  }

  async getHash<T>(key: string, field: string): Promise<T | null> {
    const value = await this.redis.hget(key, field)
    return value ? JSON.parse(value) : null
  }

  async increment(key: string, by: number = 1): Promise<number> {
    return await this.redis.incrby(key, by)
  }

  async expire(key: string, seconds: number): Promise<void> {
    await this.redis.expire(key, seconds)
  }

  onModuleDestroy() {
    this.redis.disconnect()
  }
}
```

## 最佳实践总结

### 1. 项目结构组织

**模块化设计原则：**

- 按功能域划分模块，而非技术层次
- 每个模块保持高内聚、低耦合
- 合理使用共享模块避免重复代码

**目录命名规范：**

```
src/
├── modules/           # 业务模块
│   ├── user/
│   ├── auth/
│   └── post/
├── shared/           # 共享模块
│   ├── database/
│   ├── cache/
│   └── config/
├── common/           # 通用组件
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   └── pipes/
└── utils/           # 工具函数
```

### 2. 错误处理策略

**全局异常过滤器：**

```typescript
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common'

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name)

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()

    let status = HttpStatus.INTERNAL_SERVER_ERROR
    let message = '服务器内部错误'

    if (exception instanceof HttpException) {
      status = exception.getStatus()
      const exceptionResponse = exception.getResponse()
      message = typeof exceptionResponse === 'string'
        ? exceptionResponse
        : (exceptionResponse as any).message
    }

    const errorResponse = {
      code: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    }

    this.logger.error(
      `${request.method} ${request.url}`,
      exception instanceof Error ? exception.stack : exception
    )

    response.status(status).json(errorResponse)
  }
}
```

### 3. 性能优化建议

**数据库查询优化：**

- 使用适当的索引
- 避免 N+1 查询问题
- 合理使用分页和限制

**缓存策略：**

- 热点数据缓存
- 查询结果缓存
- 会话数据缓存

**异步处理：**

- 使用队列处理耗时任务
- 合理使用异步操作
- 避免阻塞主线程

### 4. 安全最佳实践

**输入验证：**

- 使用 DTO 和验证管道
- 防止 SQL 注入
- 输入数据清理

**身份验证：**

- JWT 令牌管理
- 刷新令牌机制
- 会话安全

**权限控制：**

- 基于角色的访问控制
- 资源级权限验证
- API 限流保护

## 总结

NestJS 作为一个功能强大的 Node.js 框架，提供了丰富的模块和特性来构建可扩展的企业级应用。通过本文的深入解析，我们了解了：

1. **架构设计**：模块化的项目结构和清晰的职责分离
2. **核心概念**：Module、Service、Controller、DTO、Entity 等关键组件
3. **高级特性**：Guard、Interceptor、Reflector 等强大功能
4. **内置模块**：JWT、Config、Cache、Schedule 等实用模块
5. **第三方集成**：Prisma、Redis、验证库等生态工具
6. **最佳实践**：错误处理、性能优化、安全防护等经验总结

掌握这些知识点，将帮助你在实际项目中更好地运用 NestJS，构建出高质量、可维护的后端应用。记住，框架只是工具，关键在于理解其设计理念并结合实际需求灵活运用。

---

> 📚 **延伸阅读**
>
> - [NestJS 官方文档](https://docs.nestjs.com/)
> - [Awesome NestJS](https://github.com/nestjs/awesome-nestjs)
> - [NestJS 最佳实践指南](https://github.com/brocoders/nestjs-boilerplate)
