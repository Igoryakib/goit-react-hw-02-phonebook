import React from "react";
import PropTypes from "prop-types";
import styles from "./ListContacts.module.scss";

const ListContacts = ({ contacts, onDeleteContact, btnText }) => {
  const { list_item, list, item_elem, delete_btn} = styles;
  return (
    <ul className={list}>
      {contacts.map((item) => {
        return (
          <li className={list_item} key={item.id}>
            <p>
              {item.name}:<span className={item_elem}>{item.number}</span>
            </p>
            <button
              className={delete_btn}
              onClick={() => {
                onDeleteContact(item.id);
              }}
              type="button"
            >
              {btnText}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ListContacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  btnText: PropTypes.string
};

export default ListContacts;
