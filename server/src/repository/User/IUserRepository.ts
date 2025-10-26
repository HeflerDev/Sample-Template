import { IUser } from "@/model/schema/User/IUser";

export interface IUserRepository {
  createUser(user: Partial<IUser>, account: string): Promise<IUser>;
  getUserById(id: string, account?: string): Promise<IUser | null>;
  getUserByEmail(email: string, account?: string): Promise<IUser | null>;
  addAccountToUser(
    id: string,
    account: string,
    permission: string,
  ): Promise<void>;
  removeAccountFromUser(id: string, account: string): Promise<void>;
  updateUser(
    id: string,
    account: string,
    data: Partial<IUser>,
  ): Promise<IUser | null>;
  deleteUser(id: string, account: string): Promise<void>;
  verifyPassword(
    id: string,
    account: string,
    password: string,
  ): Promise<boolean>;
  savePassword(id: string, password: string): Promise<void>;
  getAccounts(id: string): Promise<any[]>;
  getTwoFactorSecret(id: string): Promise<string | null>;
  saveTwoFactorBackupCode(id: string, code: string): Promise<void>;
  verifyTwoFactorBackupCode(
    id: string,
    account: string,
    code: string,
  ): Promise<boolean>;
}
