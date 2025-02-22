import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(name: string, email: string, password: string): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
}
