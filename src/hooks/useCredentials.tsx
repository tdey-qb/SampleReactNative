import { useCallback, useEffect, useState } from 'react';
import { Storage } from '../data/storage';
import { useStoreDispatch } from '../state/context';
import { actions } from '../state/actions';
import { Credentials } from '../state/storeInterface';

const useCredentials = () => {
  const [credentials, setCredentials] = useState<Credentials | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useStoreDispatch();

  const getCredentials = useCallback(async () => {
    try {
      const storedToken = await Storage.getUserToken();
      const storedReam = await Storage.getQuickbaseRealm();

      const storeCred = { realm: storedReam, userToken: storedToken };

      setCredentials(storeCred);
      dispatch({
        type: actions.CREDENTIALS,
        payload: storeCred,
      });
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else if (typeof e === 'string') {
        setError(e);
      }
    }
  }, [dispatch, setCredentials]);

  const saveCredentials = async (cred: Credentials) => {
    setLoading(true);
    try {
      if (cred.userToken !== null && cred.realm !== null) {
        await Storage.setUserToken(cred.userToken);
        await Storage.setQuickbaseRealm(cred.realm);
        setCredentials(cred);
        dispatch({
          type: actions.CREDENTIALS,
          payload: cred,
        });
      } else {
        throw Error('Realm and User Token is required.');
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else if (typeof e === 'string') {
        setError(e);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getCredentials();
    setLoading(false);
  }, [getCredentials]);

  return { credentials, saveCredentials, loading, error };
};

export default useCredentials;
