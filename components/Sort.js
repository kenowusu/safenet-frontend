import SortSvg from '../public/icons/filter.svg';

const Sort = () => {
    return ( 
        <div className="item_sort">
            <ul  className="item_sort__ul">
                <li className='item_sort__li active'>
                    <button className="item_sort__btn">All</button>
                </li>
                <li className='item_sort__li'>
                    <button className="item_sort__btn">Recent</button>
                </li>
                <li className='item_sort__li'>
                    <button className="item_sort__btn">Favourites</button>
                </li>
                <li className='item_sort__li filter__img'>
                    <button className="item_sort__btn"><SortSvg/></button>
                </li>
               
            </ul>
        </div>
     );
}
 
export default Sort;