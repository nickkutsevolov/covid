import React, {useState, useEffect} from 'react';

function Pagination ({lines,getRange,getFilter}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [controls, setControls] = useState([1]);
    const [pages, setPages] = useState(0);
    const [flag, setFlag] = useState(true);
    const [linesPerPage, setLinesPerPage] = useState(10);

    useEffect(() => {
        setPages(~~(lines/linesPerPage)+1);
        getRange([linesPerPage*(currentPage-1), (currentPage*linesPerPage > lines ? lines : currentPage*linesPerPage)]);
        setFlag(true);
    }, [currentPage,lines,linesPerPage]);
    
    if (flag) {
        if (pages<6) {
            setControls(Array.from(Array(~~(lines/linesPerPage)+1), (_, index) => index + 1)); 
        } else {
            currentPage < 4 ? setControls([1,2,3,4,'...',pages]) :
            currentPage > pages-3 ? setControls([1,'...',pages-3,pages-2,pages-1,pages]) :
            setControls([1,'...',currentPage-1,currentPage,currentPage+1,'...',pages]);
        }
        setFlag(false);
    }
    
    function handler (value) {
        if (value.length<9 && value!=='...') {
            if (value === 'previous') {
                if (currentPage!==1) setCurrentPage(currentPage-1)
            } else if (value === 'next') {
                if (currentPage!==pages) setCurrentPage(currentPage+1)
            } else setCurrentPage(parseInt(value));        
        }
    }

    return (
        <div className='text-center'>
            <div className="inline-flex mx-auto justify-center py-1 select-none text-center leading-7" onClick={e => handler(e.target.innerText)}>
                <div className={`px-2 h-8 mx-1 rounded-full text-center ${currentPage===1 ? 'bg-gray-400' : 'cursor-pointer hover:bg-blue-100 bg-blue-200'}`}>previous</div>
                {controls.map((el,index) => 
                    <div key={index^2} 
                         className={`w-8 h-8 mx-1 rounded-full cursor-pointer leading-8 hover:bg-blue-100 bg-blue-${el===currentPage ? '100' : '200'}`}
                         onClick={e => handler(e.target.innerText)}>{el}</div>
                )}
                <div className={`px-2 h-8 mx-1 rounded-full text-center ${currentPage===pages ? 'bg-gray-400' : 'cursor-pointer hover:bg-blue-100 bg-blue-200'}`}>next</div>
            </div>
            <div className="inline-block px-2 h-8 mx-1 leading-7 rounded-full text-center bg-blue-200">
                <span>lines per page:</span>
                <select className="bg-transparent" onChange={e => {setLinesPerPage(parseInt(e.target.value)); setCurrentPage(1)}} >
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                </select>
            </div>
            <div className="inline-block px-2 h-8 mx-1 leading-7 rounded-full text-center bg-blue-200">
                <span>Filter by name:</span>
                <input  className="bg-transparent border-b border-black" onChange={e => e.target.value.match(/[A-Za-z]/g) ? getFilter(e.target.value.match(/[A-Za-z]/g).join('').toLowerCase()) : getFilter(/[A-Za-z]/g) }/>
            </div>
        </div>
    );
}

export default Pagination;