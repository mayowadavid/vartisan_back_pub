import { Strategy } from 'passport-jwt';
import { UsersService } from './users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UsersService);
    validate(payload: JwtPayload): Promise<any>;
}
export interface JwtPayload {
    userId: string;
    role: string;
}
export {};
