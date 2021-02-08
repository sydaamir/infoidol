import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';

const RightBlock = () => {
    return (
        <section className="rightBlock">
            <span><ForumRoundedIcon/></span>
            <span><VideoCallRoundedIcon/></span>
            <span><NotificationsRoundedIcon/></span>
            <span><AccountBoxRoundedIcon/> Mc Stand</span>

        </section>
    );
}

export default RightBlock;