import { useDispatch } from "react-redux";
import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactCard}>
      <div className={css.contactData}>
        <p>
          <HiUser size="20" />
          {name}
        </p>
        <p>
          <HiPhone size="20" />
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
