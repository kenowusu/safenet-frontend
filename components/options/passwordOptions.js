import DeleteSvgImage from '../../public/icons/options/options-delete.svg';
import ShareSvgImage from '../../public/icons/options/options-share.svg';








const PasswordOptions = () => {
    const deleteSomething = (e)=>{
        const theclass = e.target.classList.toggle('somethingelse');
    }
    return ( 
        <div className="editPassOptions">
            <button onClick={deleteSomething} type="button" className="editPassOptions-btn-delete">
                <DeleteSvgImage/>
            </button>
            <button  type="button" className="editPassOptions-btn-share">
                <ShareSvgImage/>
            </button>

        </div>
     );
}
 
export default PasswordOptions;
