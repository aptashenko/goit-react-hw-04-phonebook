import css from './contactItem.module.css'
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, deleteContact }) => (
    contacts.map(({name, number, id}) => {
        return (
            <li className={css.item} key={id}>
                <span>{name}: {number}</span>
                <button className={css.button} onClick={()=> deleteContact(id)} type="button">delete</button>
            </li>
        )
    })
)

ContactItem.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
    name: PropTypes.string,
    number: PropTypes.number,
}

export default ContactItem;