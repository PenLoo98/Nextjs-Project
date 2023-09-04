import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const url = "YOUR_DATABASE_URL";

  // useEffect + []를 사용해 맨 처음 한번만 실행되도록함.
  useEffect(() => {
    setIsLoading(true);
    // fetch: url로부터 데이터를 가져온다. 기본값 GET
    fetch(
      url
    )
      .then((response) => {
        return response.json(); // promise가 resolve될 때까지 대기
      })
      .then((data) => {
        // json데이터 모음을 배열로 변환
        const Meetups = [];
        for(const key in data){
          Meetups.push({
            id: key,
            ...data[key] // spread operator data의 모든 키-값 쌍을 배치
          })
        }

        setIsLoading(false);
        setLoadedMeetups(Meetups);
      });
  
    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
