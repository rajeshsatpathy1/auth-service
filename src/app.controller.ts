import { Controller, Get, Request, Post, Response, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-strategy/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-strategy/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import passport from 'passport';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('google'))
  @Get('/login/google')
  googleLogin() {
    passport.authenticate('google');
  }

  @UseGuards(AuthGuard('google'))
  @Get('oauth2/redirect/google')
  googleRedirect(@Request() req, @Response() res) {
    if (req.user) {
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  }
  
}
