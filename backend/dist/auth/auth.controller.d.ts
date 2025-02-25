import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
    loginUser(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
