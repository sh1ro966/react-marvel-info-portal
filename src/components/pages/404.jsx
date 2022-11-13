import ErrorMessage from "../errorMessage/ErrorMessage"
import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <p style={{'textAlign': 'center', 'fontSize': 24, 'marginTop': 150}}>Page doesn't exist</p>
            <div style={{'display': 'block', 'margin': '0 auto', 'width': 230, 'height': 50, 'backgroundColor': '#9F0013', 'borderRadius': 10 }}>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontSize': 24, 'marginTop': 10, 'paddingTop': 10, 'color': '#fff'}} to="/">Back to main page</Link>
            </div>
        </div>
    )
}

export default Page404;