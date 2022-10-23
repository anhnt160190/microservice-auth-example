import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  auth() {
    console.log('go into AUTH_SERVICE');
    return 'AUTH_SUCCESS';
  }
}
