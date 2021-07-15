import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({
  totalItemsCount,
  countUsersPage,
  selectedPage,
  clickSelectedPage,
  portionSize = 10,
}) => {
  let pagesSize = Math.ceil(totalItemsCount / countUsersPage);
  let pagesList = [];

  for (let i = 1; i <= pagesSize; i++) {
    pagesList.push(i);
  }

  let portionAll = Math.ceil(pagesSize / portionSize);
  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(selectedPage / portionSize)
  );
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rigthPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Prev
        </button>
      )}
      {pagesList
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rigthPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              key={p}
              className={selectedPage === p ? styles.selectedPage : ''}
              onClick={() => {
                clickSelectedPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionAll > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Paginator;
