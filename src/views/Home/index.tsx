import { observer } from 'mobx-react';
import { Button } from '@mantine/core';
import { useStore } from '../../stores/useStore';

const Index = observer(() => {
  const { store } = useStore();

  const { user } = store;

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          user.changeUserName(e.target.value);
        }}
      />
      <h3>hi my name is {user.userName}</h3>
      <Button>Hello world!</Button>
    </>
  );
});

export default Index;
