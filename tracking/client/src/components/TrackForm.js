import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';

import useSave from '../hooks/useSave';

import Spacer from './Spacer';

const TrackForm = () => {
    const { state: { name, recording, locations }, startRec, stopRec, setName, reset } = useContext(LocationContext);
    
    const [postTrack] = useSave();

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
                { !recording && locations.length ? <Button title="기록" onPress={postTrack} /> : null }
                {/* // 훅 에 있는 함수를 가져와서 사용 */}
            </Spacer>
            <Spacer>
                <Button title="초기화" onPress={reset} />
            </Spacer>
        </>
    )
};

export default TrackForm;