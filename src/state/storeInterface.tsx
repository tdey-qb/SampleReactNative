export interface StoreDispatch {
  type: String;
  payload: any;
}

export interface Store {
  userToken?: String | null;
  isLoading?: boolean;
  error?: String[];
}
