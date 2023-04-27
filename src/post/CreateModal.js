import { useState } from 'react';
import CommonModal from '../Common/CommonModal';

const CreateModal = () => {

   const initial = {
      text: '',
      image: '',
      likes: '',
      tags: ''
   };

   const [formData, setFormData] = useState(initial);

   const submitForm = (e) => {
      e.preventDefault();
      alert(JSON.stringify(formData, null, 2));
      setFormData(initial);
   }

   const formBody = <form onSubmit={submitForm}>
      <div className="form-row row mb-3">
         <label className="col-sm-2 col-form-label">Text</label>
         <div className="col-sm-10">
            <input type="Text" value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} className="form-control" name="description" id="post-text" placeholder="post Description" />
         </div>
      </div>
      <div className="form-group row mb-3">
         <label className="col-sm-2 col-form-label" >Image</label>
         <div className="col-sm-10">
            <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} className="form-control" name="image_url" id="post-image" placeholder="Enter Post Image Url" />
         </div>
      </div>
      <div className="form-group row mb-3">
         <label className="col-sm-2 col-form-label" >likes</label>
         <div className="col-sm-10">
            <input type="text" value={formData.likes} onChange={(e) => setFormData({ ...formData, likes: e.target.value })} className="form-control" name="post_likes" id="post-likes" placeholder="Enter No of Likes" />
         </div>
      </div>
      <div className="form-group row mb-3">
         <label className="col-sm-2 col-form-label">Tags</label>
         <div className="col-sm-10">
            <input type="text" value={formData.tags} onChange={(e) => setFormData({ ...formData, tags: e.target.value })} className="form-control" name="tags" id="post-tags" placeholder="Tags" />
         </div>
      </div>
      <button type="submit" className="btn btn-primary">Create Post</button>
   </form>;

   return (
      <CommonModal title="Add Post" content={formBody} />
   );
}
export default CreateModal;

