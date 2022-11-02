import { useAtom } from 'jotai';

import Button from '../components/base/Button';
import Dropdown from '../components/base/Dropdown';
import ImageNext from '../components/base/ImageNext';
import Spacer from '../components/base/Spacer';
import Layout from '../components/base/Layout';
import useHasMounted from '../hooks/useHasMounted';
import userIdentityAtom from '../stores/user-identity';

export default function Home() {
  const [state, saveState] = useAtom(userIdentityAtom);
  const hasMounted = useHasMounted();

  const handleClick = () => {
    saveState({ ...state, savedUntilPage: state.savedUntilPage + 1 });
  };

  const styles = {
    container: {
      padding: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <Button
        title="Save For Later"
        type="cta"
        toPage="/user-identity-trust/save-for-later/home"
      />
      <Spacer/>
      <Dropdown
        id="gender"
        label="Gender"
        options={['Male', 'Female']}
        defaultValue={'Male'}
        onDropdownSelected={(id, selectedRadio) =>
          console.log(id, selectedRadio)
        }
      ></Dropdown>
      <Spacer/>
      <Button
        title="variant 1"
        type="secondary"
        toPage="/payment/home"
      />
      <Spacer/>
      <Button
        title="variant 2"
        type="secondary"
        toPage="/user-identity-trust/save-for-later/home"
      />
      <Spacer/>
      <Button
        title="variant 3"
        type="secondary"
        toPage="/user-identity-trust/save-for-later/home"
      />
      <Spacer/>
      <Button
        title="variant 4"
        type="secondary"
        toPage="/user-identity-trust/save-for-later/home"
      />
    </div>
  );
}
