import React from 'react';
import styles from './index.module.css';

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <div className={styles.pagination}>
      <button className={styles.paginationBtn}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}>Anterior
          </button>
          
          <button className={styles.paginationBtn}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pages - 1}>Proximo
          </button>
    </div>
  );
};

export default Pagination;
