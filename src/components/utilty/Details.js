import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../images/sort.png'
function Details({title,Sorting}) {
  return (
    <div className='d-flex justify-content-between mt-3'>
        <h2> {title} نتيجة بحث </h2>
        <UnopDropdown
        trigger={<p><img src={sort} alt='' className='sort'/> ترتيب حسب </p>}
        delay={300}
        align="CENTER"
        hover
        >
        <div className='bg-white card py-2 ms-5 w-100'>
        <ul className="list-group list-group-flush p-0 w-100">
            <li className="list-group-item" onClick={()=>Sorting('-price')}>اعلى الاسعار</li>
            <li className="list-group-item" onClick={()=>Sorting('%2Bprice')}>اقل الاسعار</li>
            <li className="list-group-item" onClick={()=>Sorting('-quantity')}>الاكثر مبيعا</li>
            <li className="list-group-item" onClick={()=>Sorting('%2Bquantity')}>الاقل مبيعا</li>
            <li className="list-group-item" onClick={()=>Sorting('-ratingsAverage')}>الاكثر تقيما</li>
            <li className="list-group-item" onClick={()=>Sorting('%2BratingsAverage')}>الاقل تقيما</li>
        </ul>
        </div>
        </UnopDropdown>
    </div>
  )
}

export default Details