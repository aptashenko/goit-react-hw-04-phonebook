import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => (
    <>
        <h3>Find contacts by name</h3>
        <input className={css.input} type='text' onChange={onChange} />
    </>
)

Filter.propTypes = {
    onChange: PropTypes.func,
}

export default Filter;