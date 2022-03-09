import { useDispatch, useSelector } from "react-redux";
import { fetchPermitsRequest } from "../redux/actions/permitAction";
import { RootState } from "../redux/reducers/rootReducer";
import { useState, useEffect } from "react";
import { Modal} from 'react-bootstrap'; 

interface permitInterface {
     id: number;
     permit_type: string;
     contact_1_type: string;
     contact_1_name: string;
     contact_1_city: string;
     issue_date: string;
 }


const Tabled: React.FC = () => {
   const [firstPermit, setFirstPermit] = useState({
      permit_type:"",
      contact_1_type: "",
      contact_1_name: "",
      contact_1_city: "",
      issue_date: ""
   })


   const dispatch = useDispatch();
   const { pending, permits, error } = useSelector(
      (state: RootState) => state.permits
   );

   useEffect(() => {
      dispatch(fetchPermitsRequest());
   }, [dispatch]);

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = (permit: permitInterface) => {
      setShow(true);
      setFirstPermit(permit)
   }

   return (
      <>
      {pending ? (
         <div>Loading...</div>
      ) : error ? (
         <div>Error</div>
      ): (
         <table className="table table-hover table-borderless table-responsive">
         <thead>
            <tr>
               <th>#</th>
               <th>Permit Review</th>
               <th>Permit ID</th>
               <th>Permit Code</th>
            </tr>
         </thead>
         <tbody>
            {permits
            //@ts-ignore
            .reverse().slice(0, 10)
            //@ts-ignore
            .map((permit, index) => (
               <tr onClick={()=>handleShow(permit)}>
                  <td>{index + 1}</td>
                  <td>{permit.review_type}</td>
                  <td>{permit.id}</td>
                  <td>{permit.contact_1_zipcode}</td>
               </tr>
            ))
            }
         </tbody>
            
         </table>
      )}
         

         <Modal show={show} onHide={handleClose}>
               
               <Modal.Body>

               <Modal.Header closeButton>
                  
                 {firstPermit.permit_type}
               </Modal.Header>
                     <ul>
                        <li>Contact Name: {firstPermit.contact_1_name}</li>
                        <li>Contact Type: {firstPermit.contact_1_type}</li>
                        <li>Contact City: {firstPermit.contact_1_city}</li>
                        <li>Permit Type: {firstPermit.permit_type}</li>
                     </ul>
               </Modal.Body>               
            </Modal>
      </>
   )
}

export default Tabled;
