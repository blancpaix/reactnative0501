import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (isTracking, callback) => {  // 커스텀 훅을 만드는겁니다만?
    const [err, setErr] = useState(null);
    const [sub, setSub] = useState(null);
    // const [subscriber, setSubscriber] = useState(null); 이거 오류의 온상임 useEffect 안으로 넣어서 사용하는게 더 편함 굳이 state 안거치고
    
    // let subscriber = null;

    useEffect(() => {
        
        const startWatching = async () => {
            try {
                await requestPermissionsAsync();    // 권한 요청
                
                setSub(await watchPositionAsync({     // 위치 감지
                    accracy: Accuracy.BestForNavigation,   // option for accuracy
                    timeInterval: 3000,                    // update per millisecond
                    distanceInterval: 10                   // update per meter
                },
                // original : (location) => { addLocation(location) }   // Second arg : invoke user location callback
                    callback
                ));
            } catch (e) {
                setErr(e);
            }
        };

        if (isTracking) {
            startWatching();

        } else {
            setSub(sub.remove());   // 잘돌아감. 근데 변수는 안됨
            // subscriber.remove(); 접근이 불가능한데 이거 뭐임?
            // subscriber = null;
        }

    }, [isTracking, callback]); // 이런 조건일때만 다시 렌더링

    return [err];
    
}