import { useEffect } from "react";

const AddPasswordModal = () => {

    // hide all modals onClick on modal
    useEffect(()=>{
     const modalBtns = document.querySelectorAll('[data-toggle="modal"]');
     modalBtns.forEach(modalBtn=>{
         modalBtn.addEventListener('click',(e)=>{
             const modalTargetId = modalBtn.getAttribute('data-target');
             const modalTarget = document.getElementById(modalTargetId);
             modalTarget.classList.remove('modal_is_hidden');

         })
     });
     
     // hide all modals when modal is clicked
     const shownModals = document.querySelectorAll('.modal');
     console.log(shownModals)
     shownModals.forEach(shownModal=>{
         
        shownModal.addEventListener('click',()=>{
            shownModal.classList.add('modal_is_hidden')
        })
     })

    // stop modals from closing in  when modal content is clicked 
    const shownModalBodys = document.querySelectorAll('.modal-content');
    shownModalBodys.forEach(shownModalBody=>{
        shownModalBody.addEventListener('click',(e)=>{
            e.stopPropagation();
        })
    })

    //close modals when cancel is clicked
    const cancelModals = document.querySelectorAll('[data-toggle="modal-dismiss"')
    cancelModals.forEach(cancelModal=>{
        cancelModal.addEventListener('click',(e)=>{
            const modalTargetId = cancelModal.getAttribute('hide-modal');
            console.log(modalTargetId)
            const modal = document.getElementById(modalTargetId);
            modal.classList.add('modal_is_hidden');

        })
    })
    },[])
    return ( 
        <div className="modal modal_is_hidden" id="addPasswordModal">
            <div className="modal-container">

                
                {/* modal-content */}
                <form className="modal-content">

                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title">Add Password</span>
                    </div>

                    
                    {/* modal-body */}
                    <div className="modal-body">
                        <div className="flex flex-column flex-col p-8 pt-20">

                         
                             

                              <div className="modal-form-group">
                                <label htmlFor="" className="mr-5 ">Url</label>
                                <div>
                                    <input className="tbox  tbox__border " type="text"  />
                                </div>
                                
                              </div>

                              <div className="modal-form-group">
                                <label htmlFor="" className="mr-5 ">Name</label>
                                <div>
                                    <input className="tbox  tbox__border " type="text"  />
                                </div>
                                
                              </div>

                              <div className="modal-form-group">
                                <label htmlFor="" className="mr-5 ">Username</label>
                                <div>
                                    <input className="tbox  tbox__border " type="text"  />
                                </div>
                                
                              </div>
                      
                              <div className="modal-form-group">
                                <label htmlFor="" className="mr-5 ">Password</label>
                                <div>
                                    <input className="tbox  tbox__border " type="password"  />
                                </div>
                                
                              </div>
                      
                      

                        </div>

                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer">
                        

                        <div className="flex w-full h-full justify-end items-center pr-4">
                            <button className="btn btn__grey mr-3" data-toggle="modal-dismiss" hide-modal="addPasswordModal">Cancel</button>
                            <button className="btn btn__leave justify-self-start">Save</button>
                        </div>
                    {/* modal footer */}


                    </div>
               
                </form>
  


            </div>
        </div>
     );
}
 
export default AddPasswordModal;