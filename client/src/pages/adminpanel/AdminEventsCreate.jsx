import React, { useState } from 'react';
import '../../styles/Adminblogs.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
import axios from 'axios';
import Adminnavbar from './Adminnavbar'
import Footer from '../../components/footer/Footer'

const AdminEventsCreate = () => {

    const [blogUploadStatus, setBlogUploadStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        start_date: '',
        end_date: '',
        event_details: '',
        event_type: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Automatically generate the current date
       

        // Create the new blog post object
        const newEvent = {
            name: formData.name,
            start_date: formData.start_date,
            end_date: formData.end_date,
            event_details: formData.event_details,
            event_type: formData.event_type,
        };

        uploadBlog(newEvent);

        // Clear the form after submission
        setFormData({
            name: '',
            start_date: '',
            end_date: '',
            event_details: '',
            event_type: '',
        });
    };

    const uploadBlog = async (newEvent) => {
      const apipath = `${import.meta.env.VITE_BASE_URL}/event/create`;
      //const apipath = `http://localhost:3001/event/create`;
      //console.log(newEvent);
      await axios.post(apipath,
      {
        newEvent: newEvent
      }
      ).then((response) =>{
          console.log(response.data);
          if(response.data)setBlogUploadStatus('upload successful');
          else setBlogUploadStatus('upload failed');
      }).catch(error => {
        console.log(error);
        setBlogUploadStatus('upload failed');
      });
    }
  return (
    <>
      <Adminnavbar/>
        <section className="newPost">
          <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="image-container">
                <img
                  src="https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?b=1&s=612x612&w=0&k=20&c=_C4iNvLOzKbbfbeTMsJ4mQf8OGQwYWJ8GWKLKRglrF8="
                  alt="UI Enhancement"
                  className="ui-enhancement-image"
                />
              </div>
              <h2>Create Event</h2>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Competition Start Date</label>
                <input
                  type="date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Competition end date</label>
                <input
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label>Event type (intra or inter)</label>
                <input
                  type="text"
                  name="event_type"
                  value={formData.event_type}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Event details</label>
                <textarea
                  name="event_details"
                  value={formData.event_details}
                  onChange={handleInputChange}
                />
              </div>
              <p className='text-red-600 text-lg mb-2'>{blogUploadStatus}</p>
              <button type="submit" className="button">
                Create Event
              </button>
            </form>
           
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default AdminEventsCreate