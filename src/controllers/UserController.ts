import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UsersRepository';

class UserController {
    async create(req: Request, res: Response) {
        const { name, email } = req.body;
        const userRepository = getCustomRepository(UserRepository);
        
        const user = userRepository.create({
            name,
            email
        });

        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            return res.status(400).json({
                error: "User already exists!"
            });
        }

        await userRepository.save(user);

        return res.json(user);
    }
}

export { UserController };