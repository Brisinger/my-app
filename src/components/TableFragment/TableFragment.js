import React from "react";
import { TableColumns } from "./TableColumns";

export default class TableFragment extends React.Component {
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
            <div className='my-3'>
                <h2>Table Fragment Data</h2>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='border border-green-500'>ID</th>
                            <th className='border border-green-500'>User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(
                            (user) => {
                                return (
                                    <tr key={user.id}>
                                        <TableColumns className='border border-green-500' user={user}/>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}