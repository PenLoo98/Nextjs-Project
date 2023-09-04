import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage(){
    const navigate = useNavigate();
    const url = "YOUR_DATABASE_URL"
    function addMeetupHandler(meetupData){
        // onAddMeetup으로 받은 json을 firebase에 POST
        // /meetups.json == meetup 테이블에 저장하겠다.
        // .json을 붙여줘야한다.(firebase 전용 방식)
        fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/');
        });
    }

    return(
        <section>
            <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage;