import {useParams} from "react-router-dom";
import properties from './properties'; // Assuming you have a properties.js file with property data

export default function PropertyDisplay() {
    const params = useParams();
    const id = params.pid
    // Placeholder property data (replace with real data as needed)
    const property = properties.find(p => p.id === parseInt(id));
    if (!property) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', color: '#b00', fontSize: '1.3rem' }}>
                <h2>Property Not Found</h2>
                <p>The property you are looking for does not exist.</p>
            </div>
        );
    }
    return (
        <div>
            
        </div>
    )
}