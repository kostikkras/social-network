import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBondary
export const BugButton = () => {

    const [error, setError] = useState(false)

    const onThrow=() => { setError(true)

    }

    useEffect(() => {
        if(error){
            throw new Error();

        }
        
    },[error])
    return (
        <Button onClick={onThrow } >
            onThrow error
            
            
        </Button>
    );
};