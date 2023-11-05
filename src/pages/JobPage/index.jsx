import classNames from 'classnames/bind';
import styles from './JobPage.module.scss';
import Header from '../../components/Header';

const cl = classNames.bind(styles);

function JobPage() {
    return (
        <>
            <Header />
            <div className={cl('wrapper')}>
                <div className={cl('content')}></div>
            </div>
        </>
    );
}

export default JobPage;
