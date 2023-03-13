import ErrorBoundary from '@modules/ErrorBoundary';
import ParentModal from './components/ParentModal';
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

            <ErrorBoundary>
                <ParentModal />
            </ErrorBoundary>
        </>
    );
}

export default Index;
