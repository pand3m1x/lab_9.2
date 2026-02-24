import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import type { TextStats } from '../../types/index';

function CharacterCount(){

  return(
    <div>
      <h2>Character Counter</h2>
      <TextInput></TextInput>
      <StatsDisplay></StatsDisplay>
    </div>

  );
}

export default CharacterCount