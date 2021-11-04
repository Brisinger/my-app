import { useEffect, useRef, useState } from "react";

const Counter = () => {
    const isMounted = useRef(false);
    const [counter, setCounter] = useState(0);
    const [count, setCount] = useState(0);

    // When componentDidMount or componentDidUpdate.
    useEffect(() => 
    {
        console.log('Fires on mounted and also update.');
        document.title = 'count: ' + counter;
    });

    // When componentDidMount only.
    useEffect(() => {
        console.log('Fires on mounted only.');
        document.title = 'count: ' + 'start';
    },[count]);

    // When componentDidUnmount and componentDidUpdate.
    // Since it returns a callBack it gets invoked before standard useEffect.
    useEffect(() => {
        return () => {
            console.log('Fires when unmounted and also on update.');
        };
    });

    // When componentDidUnmount.
    useEffect(() => {
        return () => {
            console.log('Fires when unmounted only.');
        };
    }, []);

    // When componentDidUpdate only.
    useEffect(() => {
        if(isMounted.current)
        {
            console.log('Fires when updated.');
        }
        else {
            isMounted.current = true;
        }
    }, [counter]);

    return (
        <div>
            <div>Component Counter</div>
            <div>Counter: {counter}</div>
            <div>Count: {count}</div>
            <div className='my-3'>
                <button 
                    className='bg-red-500 px-3 py-1 mx-1 text-white rounded-3xl'
                    onClick={() => setCounter(counter + 1)}>Increment</button>
                <button 
                    className='bg-red-500 px-3 py-1 mx-1 text-white rounded-3xl'
                    onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
        </div>
    );
}

export default Counter;