import { useAtom } from 'jotai';

import useHasMounted from '../hooks/useHasMounted';
import userIdentityAtom from '../stores/user-identity';

export default function Product() {
  const hasMounted = useHasMounted();
  const [state, saveState] = useAtom(userIdentityAtom);

  return <>{hasMounted && state.savedUntilPage}</>;
}
