import Modal from 'react-bootstrap/Modal';

const CreateModal = ({ modalShow, setModalShow }) => {
   return (
      <>
         <Modal
            size="lg"
            show={modalShow}
            onHide={setModalShow}
            aria-labelledby="example-modal-sizes-title-lg"
         >
            <Modal.Header closeButton>
               <Modal.Title id="example-modal-sizes-title-lg">
                  Add Post
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <form>
                  <div class="form-row">
                     <div class="form-group col-md-6">
                        <label for="post-text">Text</label>
                        <input type="Text" class="form-control" id="post-text" placeholder="post Description"/>
                     </div>
                     <div class="form-group col-md-6">
                        <label for="post-image">Image</label>
                        <input type="text" class="form-control" id="post-image" placeholder="Enter Post Image Url"/>
                     </div>
                  </div>
                  <div class="form-group">
                     <label for="post-likes">likes</label>
                     <input type="text" class="form-control" id="post-likes" placeholder="Enter No of Likes"/>
                  </div>
                  <div class="form-group">
                     <label for="post-tags">Tags</label>
                     <input type="text" class="form-control" id="post-tags" placeholder="Apartment, studio, or floor"/>
                  </div>
                  <button type="submit" class="btn btn-primary">Create Post</button>
               </form>
            </Modal.Body>
         </Modal>
      </>
   );
}
export default CreateModal;

