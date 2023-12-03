/* import { z } from "zod";
import { LoginService } from "../../../../types/type";

class LoginValidator {
    rules({ email, password, role }: LoginService) {
        const validator = z.object({
            email: z
            .string({ required_error: "Preencha o Campo", })
              .min(1, 'Preencha o Campo'),
          
            password: z
            .string({ required_error: "Preencha o Campo", })
              .min(1, 'Preencha o Campo'),
          
            role: z.number({ required_error: "Preencha o Campo", })
              .min(1, 'Preencha o Campo'),
        });

        return validator;
    }
}

export default new LoginValidator(); */