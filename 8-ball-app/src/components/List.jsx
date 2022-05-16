import React from 'react';

class ListOfQuestions extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Example Question</th>
                        <th>Answer</th>
                        <th>Type</th>
                    </tr>
                    <tr>
                        <th>Do I Have toothpaste on my Sweater ?</th>
                        <th>Signs point to yes</th>
                        <th>Affirmative</th>
                    </tr>
                    <tr>
                        <th>Like what you see ?</th>
                        <th>Don't count on it </th>
                        <th>Contrary</th>
                    </tr>
                    <tr>
                        <th>Will the world end this weekend ?</th>
                        <th>Reply hazy, try again later</th>
                        <th>Neutral</th>
                    </tr>
                    <tr>
                        <th>Are yoy feeling lucky ?</th>
                        <th>You may rely on it</th>
                        <th>Affirmative</th>
                    </tr>
                    <tr>
                        <th>Should I ask for a raise ?</th>
                        <th>Outlook not so good</th>
                        <th>Contrary</th>
                    </tr>
                    <tr>
                        <th>Did the cat drag it in ?</th>
                        <th>Very doubtful</th>
                        <th>Contrary</th>
                    </tr>
                    <tr>
                        <th>Will there be more snow ?</th>
                        <th>It is certain</th>
                        <th>Affirmative</th>
                    </tr>
                    <tr>
                        <th>Should I try to skateboard ?</th>
                        <th>Concentrate and ask again</th>
                        <th>Neutral</th>
                    </tr>
                    <tr>
                        <th>Is it safe to talk in the meeting ?</th>
                        <th>Without a doubt</th>
                        <th>Affirmative</th>
                    </tr>
                    <tr>
                        <th>Will OP ever deliver</th>
                        <th>Don't count on it</th>
                        <th>Contrary</th>
                    </tr>

                </table>
            </div>
        )
    }
}

export default ListOfQuestions;