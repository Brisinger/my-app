import React from "react";
import UserDetails from "./UserDetails";

export default class UserPropTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Sheela'
                },
                {
                    id: 2,
                    name: 'Leela'
                },
                {
                    id: 3,
                    name: 'Balaji'
                },
                {
                    id: 4,
                    name: 'Shubhojit'
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className='font-bold text-xl'>User Props Types</h2>
                </div>
                <div className='flex'>
                    {
                        this.state.users.map(
                            user => (
                                <UserDetails
                                    name={user.name}
                                    id={user.id}
                                    key={user.id}/>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}