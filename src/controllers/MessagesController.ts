import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {

    async create(request:Request, response:Response): Promise<Response> {
        const { admin_id, text, user_id } = request.body;

        const messages = new MessagesService();

        const message = await messages.create({
            admin_id,
            text,
            user_id
        });

        return response.json(message);
    }

    async showByUser(request:Request, response:Response) {
        const { id } = request.params;

        const messagesService = new MessagesService();

        const list = await messagesService.listByUser(id);

        return response.json(list);
    }
}

export { MessagesController };
