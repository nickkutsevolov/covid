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
        <div className='flex justify-between'>
            <div>
                <div class="relative">
			    	<input type="search" class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium" placeholder="Search..." onChange={e => {
                        if (e.target.value.match(/[A-Za-z]/g)) {
                            getFilter(e.target.value.match(/[A-Za-z]/g).join('').toLowerCase());
                            setCurrentPage(1);
                        } else getFilter(/[A-Za-z]/g)}}/>
			    	<div class="absolute top-0 left-0 inline-flex items-center p-2">
			    		<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			    			<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
			    			<circle cx="10" cy="10" r="7"></circle>
			    			<line x1="21" y1="21" x2="15" y2="15"></line>
			    		</svg>
			    	</div>
			    </div>
            </div>
            <div className='flex items-baseline'>
                <div className="inline-flex mx-auto justify-center py-1 select-none text-center leading-7" onClick={e => handler(e.target.innerText)}>
                    <div className={`w-8 h-8 mx-1 rounded-full text-center ${currentPage === 1 ? 'hidden' : 'cursor-pointer hover:bg-gray-300'}`}><div className="inline-block">&lt;</div></div>
                    {controls.map((el, index) =>
                        <div key={index ^ 2}
                            className={`w-8 h-8 mx-1 rounded-full leading-8 ${el === currentPage ? 'bg-gray-600 text-white' : el === '...' ? '' : 'hover:bg-gray-300 cursor-pointer'}`}
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