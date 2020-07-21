import React from "react";
import style from "../styles/PhoneBook.module.css";
const PhonebookListItem = ({ id, name, number, onRemovePersonData }) => (
  <li key={id} className={style.listItem}>
    <span className={style.dataPerson}>{name}:</span>
    <span className={style.dataPerson}>{number}</span>
    <button className={style.buttonRemove} onClick={onRemovePersonData}>
      Удалить
    </button>
  </li>
);
export default PhonebookListItem;
