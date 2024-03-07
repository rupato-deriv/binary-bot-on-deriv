import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.scss';
import { translate } from '@i18n';
import PropTypes from 'prop-types';

const Wrapper = ({ content, children }) => (
    <div className='page-not-found'>
        <div className='page-not-found__inner'>
            {content}
            {children}
        </div>
    </div>
);

Wrapper.propTypes = {
    children: PropTypes.node,
    content: PropTypes.string,
};

const PageNotFound = () => (
    <p>
        <span>{translate('Click')}</span>
        <span>
            <a href='/'>{translate(' here')}</a>
        </span>
        <span>{translate(' to reload if the home page has not loaded.')}</span>
    </p>
);

const PageDoesNotExist = () => (
    <p>
        <span>{translate('Are you lost? Click ')}</span>{' '}
        <Link to='/'>
            <span>{translate('here.')}</span>
        </Link>
    </p>
);

const NotFound = ({ active_symbols_loaded = true }) => {
    React.useEffect(() => {
        // Todo: Remove jquery
        $('.barspinner').hide();
    }, []);

    if (!active_symbols_loaded) {
        return (
            <Wrapper content={translate('Something went wrong')}>
                <PageNotFound />
            </Wrapper>
        );
    }
    return (
        <Wrapper content={translate('The page you are looking for does not exist.')}>
            <PageDoesNotExist />
        </Wrapper>
    );
};

NotFound.propTypes = {
    active_symbols_loaded: PropTypes.bool,
};
export default NotFound;
