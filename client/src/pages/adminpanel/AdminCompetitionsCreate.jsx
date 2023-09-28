import React, { useState, useEffect } from 'react';
import '../../styles/Adminblogs.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
import axios from 'axios';
import Adminnavbar from './Adminnavbar'
import Footer from '../../components/footer/Footer'
import { useNavigate, useLocation } from 'react-router-dom';

const AdminCompetitionsCreate = () => {
    const location = useLocation();
    const { item } = location.state;

    const [blogUploadStatus, setBlogUploadStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        registration_start_date: '',
        registration_end_date: '',
        start_date: '',
        end_date: '',
        no_of_team_member_min: '',
        no_of_team_member_max: '',
        description: '',
        fees: '',
        event_id: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Automatically generate the current date
        const currentDate = new Date().toISOString().split('T')[0];

        // Create the new blog post object
        const newCompetition = {
            // title: formData.title,
            // author: formData.author,
            // created_at: currentDate,
            // content: formData.content,
            // imageLink: formData.image,
            // videoLink: formData.video,
            name: formData.name,
            registration_start_date: formData.registration_start_date,
            registration_end_date: formData.registration_end_date,
            start_date: formData.start_date,
            end_date: formData.end_date,
            no_of_team_member_min: formData.no_of_team_member_min,
            no_of_team_member_max: formData.no_of_team_member_max,
            fees: formData.fees,
            description: formData.description,
            event_id: item.id,
        };

        uploadBlog(newCompetition);
        // Send the new blog post to your API or data storage
        // For this example, let's assume you have a function to send data
        // to your server or save it in a JSON file
        // sendDataToServer(newBlogPost);

        // Clear the form after submission
        setFormData({
            name: '',
            registration_start_date: '',
            registration_end_date: '',
            start_date: '',
            end_date: '',
            no_of_team_member_min: '',
            no_of_team_member_max: '',
            fees: '',
            description: '',
            event_id: '',
        });
    };

    const uploadBlog = async (newCompetition) => {
      const apipath = `${import.meta.env.VITE_BASE_URL}/competition/add`;
      //console.log(newCompetition);
      //const apipath = `http://localhost:3001/competition/add`;
      await axios.post(apipath,
      {
        newCompetition:newCompetition
      }
      ).then((response) =>{
          console.log(response.data);
          if(response.data)setBlogUploadStatus('upload successful');
      }).catch(error => {
        console.log(error);
      });
    }
    useEffect(() => {
        console.log(item.id);
    }, []);

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
              <h2>Create Competition</h2>
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
                <label>Registration Start Date</label>
                <input
                  type="date"
                  name="registration_start_date"
                  value={formData.registration_start_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Registration end date</label>
                <input
                  type="date"
                  name="registration_end_date"
                  value={formData.registration_end_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Competition Start Date</label>
                <input
                  type="datetime-local"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Competition end date</label>
                <input
                  type="datetime-local"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Number of Team Minimum Member</label>
                <input
                  type="number"
                  name="no_of_team_member_min"
                  value={formData.no_of_team_member_min}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Number of Team Maximum Member</label>
                <input
                  type="number"
                  name="no_of_team_member_max"
                  value={formData.no_of_team_member_max}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Registration Fee</label>
                <input
                  type="number"
                  name="fees"
                  value={formData.fees}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <p className='text-red-600 text-lg'>{blogUploadStatus}</p>
              <button type="submit" className="button">
                Create Competition
              </button>
            </form>
           
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default AdminCompetitionsCreate