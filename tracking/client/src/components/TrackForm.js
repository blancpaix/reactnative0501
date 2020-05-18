import React, { useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';

import Spacer from './Spacer';

const TrackForm = () => {
    const { state: { name, recording, locations }, startRec, stopRec, setName, reset } = useContext(LocationContext);
    
    return (
        <>
            <Spacer>
                <Input value={name} 
                    onChangeText={setName}
                    placeholder="명칭 입력하세요"
                />
            </Spacer>
            <Spacer>
                { recording ? <Button title="중지" onPress={stopRec} /> : <Button title="시작" onPress={startRec} /> }
            </Spacer>
            <Spacer>
                { !recording && locations.length ? <Button title="기록" onPress={() => {}} /> : null }
            </Spacer>
            <Spacer>
                <Button title="초기화" onPress={reset} />
            </Spacer>
        </>
    )
};

export default TrackForm;