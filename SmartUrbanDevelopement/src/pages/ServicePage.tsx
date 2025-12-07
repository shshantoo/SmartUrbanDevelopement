// Folder: src/pages
import type { FC } from "react";

interface Props {
    title: string;
}

const ServicePage: FC<Props> = ({ title }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className="table-actions">
                <button onClick={() => alert('Add row')}>Add</button>
                <button onClick={() => alert('Edit row')}>Edit</button>
                <button onClick={() => alert('Delete row')}>Delete</button>
                <input type="text" placeholder="Search" />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sample Item 1</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sample Item 2</td>
                        <td>Inactive</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ServicePage;
