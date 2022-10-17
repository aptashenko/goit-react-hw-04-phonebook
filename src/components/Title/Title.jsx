import css from './title.module.css';
import PropTypes from 'prop-types';

const Title = ({ title, children }) => (
    <div className={css.container}>
        <h2>{title}</h2>
        {children}
    </div>
)

Title.propTypes = {
    title: PropTypes.string,
}

export default Title;