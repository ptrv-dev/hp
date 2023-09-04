import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Confetti from 'react-confetti';

import useWindowSize from './useWindowSize';

const App = () => {
  const { width, height } = useWindowSize();
  const [active, setActive] = useState(false);
  return (
    <div className="wrapper">
      <TypeAnimation
        sequence={[
          'С днём рождения',
          2000,
          'С днём рождения\nПидорас',
          50,
          'С днём рождения\nСаныч!',
          () => setActive(true),
        ]}
        cursor={true}
        wrapper="p"
      />
      {active && <Confetti width={width} height={height} />}
    </div>
  );
};

export default App;
