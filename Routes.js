import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import TelaDuCarai from './views/TelaDuCarai';
import SegundaTela from './views/SegundaTela';


const Routes = createSwitchNavigator({
    TelaDuCarai,
    SegundaTela,
})

export default createAppContainer(Routes);