import {useCallback, useEffect, useState} from 'react';
import {Storage} from '../data/storage';
import {useStoreDispatch} from '../state/context';
import {actions} from '../state/actions';

const useUserToken = () => {
  const [userToken, setUserToken] = useState<string | null>();
  const [loading, setLoading] = useState(true);
  const {dispatch} = useStoreDispatch();

  const getUserToken = useCallback(async () => {
    try {
      const storedToken = await Storage.getUserToken();
      setUserToken(storedToken);
      dispatch({
        type: actions.USER_TOKEN,
        payload: storedToken,
      });
    } catch (e) {
      dispatch({
        type: actions.ERROR,
        payload: e,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    getUserToken();
    setLoading(false);
  }, [getUserToken]);

  return [userToken, loading];
};

export default useUserToken;