import React, { Component } from 'React';

class HomePage extends Component
{
    render() {
        const currentTime = new Date().getTime;
        const author = '##javascript-br';

        return (
            <div>
                <h1>reactjs-open-data</h1>
                <h2>Um projeto de {author}</h2>

                {currentTime}
            </div>
        );
    }
}

export default HomePage;