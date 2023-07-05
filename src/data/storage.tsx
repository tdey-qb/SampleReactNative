import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Storage helper class
 *
 * NOTE: !!
 * Async Storage is not secured for storing
 * user token, but for testing and boilerplate purpose this works!!
 */

export class Storage {
  static store = AsyncStorage;

  public static async setUserToken(token: string) {
    await this.store.setItem('userToken', token);
  }

  public static async getUserToken() {
    return await this.store.getItem('userToken');
  }

  public static async setQuickbaseRealm(realm: string) {
    await this.store.setItem('realm', realm);
  }

  public static async getQuickbaseRealm() {
    return await this.store.getItem('realm');
  }
}
