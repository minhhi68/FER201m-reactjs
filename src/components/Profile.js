import {Redirect} from 'react-router-dom';

function Profile({match}){
    if(match.params.isLogin){
        return(
            <div>
                <h2> Welcome: {match.params.name}</h2>
            </div>
        );
    }
    else return <Redirect to ="/Home"/>;
}

export default Profile;