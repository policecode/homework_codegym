import { Component } from "react";
export default class StudentInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const students = [
            {
                company: 'Alfreds Futterkiste',
                contact: 'Maria Anders',
                country: 'Germany'
            },
            {
                company: 'Centro comercial Moctezuma',
                contact: 'Francisco Chang',
                country: 'Mexico'
            },
            {
                company: 'Ernst Handel',
                contact: 'Roland Mendel',
                country: 'Austria'
            },
            {
                company: 'Island Trading',
                contact: 'Helen Bennett',
                country: 'UK'
            },
            {
                company: 'Laughing Bacchus Winecellars',
                contact: 'Yoshi Tannamuri',
                country: 'Canada'
            },
            {
                company: 'Magazzini Alimentari Riuniti',
                contact: 'Giovanni Rovelli',
                country: 'Italy'
            }
        ];
        return (
            <>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Copany</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{student.company}</td>
                                        <td>{student.contact}</td>
                                        <td>{student.country}</td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </>
        );
    }
}