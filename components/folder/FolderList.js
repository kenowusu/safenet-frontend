
//===================import svg images =================//
import AddFolderSvgImage from '../../public/icons/options/options-add-folder.svg';


const FolderList = () => {
    return ( 
        <div className="folder modal-form-group">
            <label className="folder-title mr-5">Folder</label>
            <div style={{width:"auto"}} className="flex ">
                <select className="folder-option"  name="" id="">
                    <option value="">1dfgdfgdf</option>
                    <option value="">2fdgdfgdfg</option>
                    <option value="">3dfgfdg</option>
                    <option value="">4fddfgdfgd</option>
                    <option value="">5dffdgfdg</option>
                </select>

                <button  className='folder-btn' type="button" >
                   <AddFolderSvgImage/>
                </button>
            </div>
            
        </div>
     );
}
 
export default FolderList;