import React, { useState, useEffect } from 'react';

function Pagination({ postPerPage, totalPosts, paginate }) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li className="page-item" key={number}>
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
