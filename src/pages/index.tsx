import { useAtom } from 'jotai';

import Button from '../components/base/Button';
import ImageNext from '../components/base/ImageNext';
import Layout from '../components/base/Layout';
import useHasMounted from '../hooks/useHasMounted';
import userIdentityAtom from '../stores/user-identity';

export default function Home() {
  const [state, saveState] = useAtom(userIdentityAtom);
  const hasMounted = useHasMounted();

  const handleClick = () => {
    saveState({ ...state, savedUntilPage: state.savedUntilPage + 1 });
  };

  return (
    <Layout>
      <Button
        title="Save For Later"
        type="cta"
        toPage="/user-identity-trust/save-for-later/home"
      />
    </Layout>
  );
}
