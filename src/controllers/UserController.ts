import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
    async create(req: Request, res: Response) {
        const { name, email } = req.body,
            userRepository = getRepository(User),
            user = userRepository.create({
                name,
                email
            });

        await userRepository.save(user);

        return res.json(user);
    }
}

export { UserController };