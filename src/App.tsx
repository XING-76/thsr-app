import { checkAuth, getAuthorizationHeader } from '@utils/auth';
import React from 'react';
import SearchForm from './components/SearchForm';

function App() {
    React.useEffect(() => {
        if (!checkAuth()) {
            getAuthorizationHeader();
        }
    }, []);

    return (
        <div className="app">
            <SearchForm />
        </div>
    );
}

export default App;
