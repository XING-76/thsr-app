import ErrorBoundary from '@modules/ErrorBoundary';
import SearchForm from './components/SearchForm';
import SearchResultTable from './components/SearchResultTable';

function Index() {
    return (
        <>
            <ErrorBoundary>
                <SearchForm />
            </ErrorBoundary>

            <ErrorBoundary>
                <SearchResultTable />
            </ErrorBoundary>
        </>
    );
}

export default Index;
