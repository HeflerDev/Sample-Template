import { IUserRepository } from "./IUserRepository";
import { IUser } from "@/model/schema/User/IUser";
import { User as UserModel } from "@/model/schema";

export class UserRepository implements IUserRepository {
  private userModel: UserModel;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }

  async createUser(user: Partial<IUser>, account: string): Promise<IUser> {
    return await this.userModel.custom.create.create({ user, account });
  }

  async getUserById(id: string, account?: string): Promise<IUser | null> {
    return await this.userModel.custom.read.get({ id, account });
  }

  async getUserByEmail(email: string, account?: string): Promise<IUser | null> {
    return await this.userModel.custom.read.get({ email, account });
  }

  async addAccountToUser(
    id: string,
    account: string,
    permission: string,
  ): Promise<void> {
    await this.userModel.custom.account.add({ id, account, permission });
  }

  async removeAccountFromUser(id: string, account: string): Promise<void> {
    await this.userModel.custom.account.delete({ id, account });
  }

  async updateUser(
    id: string,
    account: string,
    data: Partial<IUser>,
  ): Promise<IUser | null> {
    await this.userModel.custom.update.update({ id, account, data });
    return await this.getUserById(id, account);
  }

  async deleteUser(id: string, account: string): Promise<void> {
    await this.userModel.custom.deleteUser.deleteUser({ id, account });
  }

  async verifyPassword(
    id: string,
    account: string,
    password: string,
  ): Promise<boolean> {
    const result = await this.userModel.custom.password.verify({
      id,
      account,
      password,
    });
    return !!result;
  }

  async savePassword(id: string, password: string): Promise<void> {
    await this.userModel.custom.password.save({ id, password });
  }

  async getAccounts(id: string): Promise<any[]> {
    return await this.userModel.custom.account.get({ id });
  }

  async getTwoFactorSecret(id: string): Promise<string | null> {
    return await this.userModel.custom.twoFactorSecret.twoFactorSecret({ id });
  }

  async saveTwoFactorBackupCode(id: string, code: string): Promise<void> {
    await this.userModel.custom.twoFactorBackup.save({ id, code });
  }

  async verifyTwoFactorBackupCode(
    id: string,
    account: string,
    code: string,
  ): Promise<boolean> {
    return await this.userModel.custom.twoFactorBackup.verify({
      id,
      account,
      code,
    });
  }
}
