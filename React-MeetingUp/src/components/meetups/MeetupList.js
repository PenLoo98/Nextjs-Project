import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props){
    // map() 함수를 이용하여 MeetupItem 컴포넌트를 반복적으로 생성
    return (
        <ul className={classes.list}>
        {props.meetups.map((meetup) => (
            // MeetupItem 컴포넌트에 meetups 데이터 전달
            <MeetupItem 
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            />
        ))}
        </ul>
    );
}

export default MeetupList;