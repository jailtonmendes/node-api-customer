import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {

    if (!id) {
        throw new Error("Solicitação inválida.");
    }

    // Procurando por item solicitado pelo ID
    const findCustomer = await prismaClient.customer.findFirst({
        where: {
            id: id
        }
    })

    // Se não encontrou retorna o erro
    if (!findCustomer) {
        throw new Error("Cliente não existe!");
    }

    // Deletando item
    await prismaClient.customer.delete({
        where: {
            id: findCustomer.id
        }
    })

    return { message: "Deletado com sucesso!" }

  }
}

export { DeleteCustomerService  };