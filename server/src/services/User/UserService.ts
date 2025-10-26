import { IUser } from "@/model/schema/User/IUser";
import { UserRepository } from "@/repository/User/UserRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user: Partial<IUser>, account: string): Promise<IUser> {
    return await this.userRepository.createUser(user, account);
  }

  async getUserById(id: string, account?: string): Promise<IUser | null> {
    return await this.userRepository.getUserById(id, account);
  }

  async getUserByEmail(email: string, account?: string): Promise<IUser | null> {
    return await this.userRepository.getUserByEmail(email, account);
  }

  async addAccountToUser(
    id: string,
    account: string,
    permission: string,
  ): Promise<void> {
    await this.userRepository.addAccountToUser(id, account, permission);
  }

  async removeAccountFromUser(id: string, account: string): Promise<void> {
    await this.userRepository.removeAccountFromUser(id, account);
  }

  async updateUser(
    id: string,
    account: string,
    data: Partial<IUser>,
  ): Promise<IUser | null> {
    return await this.userRepository.updateUser(id, account, data);
  }

  async deleteUser(id: string, account: string): Promise<void> {
    await this.userRepository.deleteUser(id, account);
  }

  async verifyPassword(
    id: string,
    account: string,
    password: string,
  ): Promise<boolean> {
    return await this.userRepository.verifyPassword(id, account, password);
  }

  async savePassword(id: string, password: string): Promise<void> {
    await this.userRepository.savePassword(id, password);
  }

  async getAccounts(id: string): Promise<any[]> {
    return await this.userRepository.getAccounts(id);
  }

  async getTwoFactorSecret(id: string): Promise<string | null> {
    return await this.userRepository.getTwoFactorSecret(id);
  }

  async saveTwoFactorBackupCode(id: string, code: string): Promise<void> {
    await this.userRepository.saveTwoFactorBackupCode(id, code);
  }

  async verifyTwoFactorBackupCode(
    id: string,
    account: string,
    code: string,
  ): Promise<boolean> {
    return await this.userRepository.verifyTwoFactorBackupCode(
      id,
      account,
      code,
    );
  }
}
