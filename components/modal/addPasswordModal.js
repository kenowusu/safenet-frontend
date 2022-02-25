const AddPasswordModal = () => {
    return ( 
        <div className="modal">
            <div className="modal-container">

                
                {/* modal-content */}
                <div className="modal-content">

                    {/* modal-header */}
                    <div className="modal-header">
                        <span class="modal-title">Add Password</span>
                    </div>

                    
                    {/* modal-body */}
                    <div className="modal-body">
                        <div class="flex flex-column flex-col p-8 pt-20">

                         
                              <div className="flex">
                                <label  htmlFor="" className="mr-5 rd-modal-text">Url</label>
                                <input className="tbox  tbox__border mb-6" type="text" />
                              </div>

                              <div>
                                <label htmlFor="" className="mr-5 rd-modal-text">Username</label>
                                <input  className="tbox  tbox__border mb-6" type="text" />
                              </div>

                              <div>
                                <label htmlFor="" className="mr-5 rd-modal-text">Password</label>
                                <input className="tbox  tbox__border mb-6" type="password"  />
                              </div>
                      

                        </div>

                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer">
                        

                        <div class="flex w-full h-full justify-end items-center pr-4">
                            <button class="btn btn__leave mr-3">Cancel</button>
                            <button class="btn btn__grey justify-self-start">Save</button>
                        </div>
                    {/* modal footer */}


                    </div>
               
                </div>
  


            </div>
        </div>
     );
}
 
export default AddPasswordModal;