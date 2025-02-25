import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
}
