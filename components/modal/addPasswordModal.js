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
            console.log('fired')
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
                            <button class="btn btn__grey mr-3" data-toggle="modal-dismiss" hide-modal="addPasswordModal">Cancel</button>
                            <button class="btn btn__leave justify-self-start">Save</button>
                        </div>
                    {/* modal footer */}


                    </div>
               
                </div>
  


            </div>
        </div>
     );
}
 
export default AddPasswordModal;