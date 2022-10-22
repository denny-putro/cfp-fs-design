import { useAtom } from 'jotai';

import Button from '../components/base/Button';
import Dropdown from '../components/base/Dropdown';
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
      <Dropdown
        id="gender"
        label="Gender"
        options={['Male', 'Female']}
        defaultValue={'Male'}
        onDropdownSelected={(id, selectedRadio) =>
          console.log(id, selectedRadio)
        }
      ></Dropdown>
    </Layout>
  );
}
