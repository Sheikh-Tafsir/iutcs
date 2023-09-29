/* eslint-disable react/jsx-key */
import React,{ useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import '../../styles/AdminEvents.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import Loading from '../../components/loading/Loading'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Events = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [eventData, setEventData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                //const apiPath = 'http://localhost:3001/blog/all';
                const apiPath = `${import.meta.env.VITE_BASE_URL}/event/all`;

                const response = await axios.get(apiPath);

                // Handle the successful response here
                console.log(response.data.events);
                setEventData(response.data.events)
                setLoading(false);

                // Assuming the response.data is an array of blogs

            } catch (error) {
                // Handle any errors that occurred during the request
                console.error('Error fetching data:', error);
                setLoading(false);
                
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return(
          <Loading />
        );
      }

  return (
    <>
        <Navbar/>
        <div>
            <h2 className='events-headerTitle'>All Events</h2>
            <div className='admin-events-box' >
                {eventData.map((item) => (
                    <div className='admin-events'>
                        <h2>{item.name}</h2>
                        <h3>{item.event_type}</h3>
                        <p>Start Date: {item.start_date.substring(0, 10)}</p>
                        <p>End Date: {item.end_date.substring(0, 10)}</p>
                        <Button onClick={() => navigate('/competitions/view', { state: { item } } )}>View</Button>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Events