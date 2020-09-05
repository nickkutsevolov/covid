import React, { useState, useEffect } from 'react';

function Pagination({ rows, getRange, getFilter }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [controls, setControls] = useState([1]);
    const [pages, setPages] = useState(0);
    const [flag, setFlag] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        setPages(~~(rows / rowsPerPage) + 1);
        getRange([rowsPerPage * (currentPage - 1), (currentPage * rowsPerPage > rows ? rows : currentPage * rowsPerPage)]);
        setFlag(true);
    }, [currentPage, rows, rowsPerPage]);

    if (flag) {
        if (pages < 6) {
            setControls(Array.from(Array(~~(rows / rowsPerPage) + 1), (_, index) => index + 1));
        } else {
            currentPage < 4 ? setControls([1, 2, 3, 4, '...', pages]) :
                currentPage > pages - 3 ? setControls([1, '...', pages - 3, pages - 2, pages - 1, pages]) :
                    setControls([1, '...', currentPage - 1, currentPage, currentPage + 1, '...', pages]);
        }
        setFlag(false);
    }

    function handler(value) {
        if (value.length < 9 && value !== '...') {
            if (value === '<') {
                if (currentPage !== 1) setCurrentPage(currentPage - 1)
            } else if (value === '>') {
                if (currentPage !== pages) setCurrentPage(currentPage + 1)
            } else setCurrentPage(parseInt(value));
        }
    }

    return (
        <div className='flex justify-between items-baseline'>
            <div className="inline-block px-2 h-8 mx-1 leading-7 rounded-full text-center">
                <span>Filter by name:</span>
                <input className="bg-transparent border-b border-black" onChange={e => {
                    if (e.target.value.match(/[A-Za-z]/g)) {
                        getFilter(e.target.value.match(/[A-Za-z]/g).join('').toLowerCase());
                        setCurrentPage(1);
                    } else getFilter(/[A-Za-z]/g)}} />
            </div>
            <div className='flex items-baseline'>
                <div className="inline-flex mx-auto justify-center py-1 select-none text-center leading-7" onClick={e => handler(e.target.innerText)}>
                    <div className={`w-8 h-8 mx-1 rounded-full text-center ${currentPage === 1 ? 'hidden' : 'cursor-pointer hover:bg-gray-300'}`}>&lt;</div>
                    {controls.map((el, index) =>
                        <div key={index ^ 2}
                            className={`w-8 h-8 mx-1 rounded-full cursor-pointer leading-8 hover:bg-gray-300 ${el === currentPage ? 'bg-gray-600 text-white' : ''}`}
                            onClick={e => handler(e.target.innerText)}>{el}</div>
                    )}
                    <div className={`w-8 h-8 mx-1 rounded-full text-center ${currentPage === pages ? 'hidden' : 'cursor-pointer hover:bg-gray-300'}`}>&gt;</div>
                </div>
                <div className="px-2 h-8 mx-1 leading-7 rounded-full text-center">
                    <span className="text-gray-600">rows per page:</span>
                    <select className="bg-transparent" onChange={e => { setRowsPerPage(parseInt(e.target.value)); setCurrentPage(1) }} >
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Pagination;