export interface StoreDispatch {
  type: String;
  payload: any;
}

export interface Credentials {
  realm: string | null;
  userToken: string | null;
}

export interface Store {
  credentials?: Credentials | null;
  isLoading?: boolean;
  error?: String[];
}
