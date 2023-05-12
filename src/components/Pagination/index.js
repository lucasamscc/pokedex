import React from 'react';
import styles from './index.module.css';

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <div className={styles.pagination}>
      <button className={styles.paginationBtn}
            onClick={() => currentPage >= 1 && setCurrentPage(currentPage == 1)}>First
      </button>
      <button className={styles.paginationBtn}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}>Previous
          </button>
          
          {/*{Array.from(Array(pages), (pokemon, index) => {
            return <button className={`${styles.paginationBtn} ${index === currentPage ? styles.active : ''}`} key={index} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
          })}*/}
        
          <button className={styles.paginationBtn}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pages - 1}>Next
          </button>
          <button  className={styles.paginationBtn} onClick={() => currentPage < pages - 1 ? setCurrentPage(pages - 1) : null}>Last
          </button>
    </div>
  );
};

export default Pagination;
