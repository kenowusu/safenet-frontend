import { useEffect,useState,useContext } from "react";
import { PasswordContext } from "../../contexts/PasswordContext";






const UploadMessage = (props)=>{
    return(
        <>
          <p>Click to import password <em className="font-bold">CSV</em> file</p>
          <p className="text-sm text-center">NB: CSV should be in the format url,name,username,password </p>
          <div style={{color:"red"}}>{props.fileTypeErr}</div>
        </>
    )
}

const File = (props)=>{
  return(
    <p style={{fontWeight:"bold"}}>
      {props.fileName}
   </p>
  )
}

const ImportPasswordModal = () => {

    const {setPasswords,setShowImportPasswordModal} = useContext(PasswordContext);
    const [fileTypeErr,setFileTypeErr] = useState('');
    const [isCsvFile,setIsCsvFile] = useState(false);
    const [csvFile,setCsvFile] = useState('');
    const [fileName,setFileName] = useState('');
    





    const getFile = (e)=>{
        setFileTypeErr('');
        const target = e.target;
        const file = e.target.files[0];
        const fileName = file.name;
        const fileType = fileName.split('.').pop();
        if(fileType.toLowerCase() !== "csv"){
           setFileTypeErr('file must be of type csv');
           setIsCsvFile(false);
        }else{
           setIsCsvFile(true);
           setFileName(fileName);
           setCsvFile(file);
        }
    }

    const importFile = (e)=>{
         e.preventDefault();
         if(!isCsvFile){
             return;
         }
         const api = process.env.NEXT_PUBLIC_API;
         const fetchUrl = `${api}/api/tools/import_password`;
         const data = new FormData();
         const file = csvFile;
         console.log(file);
         data.append('password_import',file);
         const xhr = new XMLHttpRequest();
         xhr.open('POST',fetchUrl);
         xhr.withCredentials = true;
        //  xhr.setRequestHeader('Content-Type','multipart/form-data');
         xhr.onreadystatechange = async()=>{
             if(xhr.readyState === 4){
                 const responseData = JSON.parse(xhr.responseText);
                 
                 //if password import was successfull, fetch passwords and change state
                 if(responseData.success){
                  const passReqUrl = `${api}/api/passwords`;
                  const passReqOptions = {
                      method:"GET",
                      credentials:"include",
                      headers:{
                          "Content-Type":"application/json"
                      }
                  }
                  const passReq = await fetch(passReqUrl,passReqOptions);
                  
                  if(passReq.status == 200){
                      const passRes = await passReq.json();
                      setPasswords(passRes);
                      setShowImportPasswordModal(false);
                  }

                 }
             }
         }
         xhr.send(data);

    }


    return ( 
        <div className="modal modal__dialog" id="addPasswordModal"  onClick={()=>setShowImportPasswordModal(false)}>
            <div className="modal-container">

                
                {/* modal-content */}
                <form className="modal-content" onClick={(e)=>e.stopPropagation()} >

                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title">Import Password</span>
                    </div>

                    

                    
                    {/* modal-body */}
                    <div className="modal-body ">
                      <div className="w-full p-8">
                        <label  className="label-import" htmlFor="importPassword">
                            <div className=" flex-col w-full flex justify-center items-center">
                              {(!isCsvFile) ? <UploadMessage fileTypeErr={fileTypeErr}/> : <File fileName={fileName}/>}
                            </div>
                        </label>
                        <input type="file"  name="" id="importPassword" 
                        // accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" 
                         onChange={getFile} />
                      </div>

                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer flex justify-center items-center">
                        

                        <div className="flex w-full h-full justify-end items-center pr-4">
                            <button type="button" className="btn btn__grey mr-3"  onClick={(e)=>setShowImportPasswordModal(false)}>Cancel</button>
                            <button type="submit"   className="btn btn__leave justify-self-start"
                            onClick={importFile}
                            >Import</button>
                        </div>
                    {/* modal footer */}


                    </div>
               
                </form>
  


            </div>
        </div>
     );
}
 
export default ImportPasswordModal;