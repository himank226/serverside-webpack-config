import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App'

export default () => {
    const content = renderToString(<App />);

    return `
            <html>
                <head> </head>
                <body>
                    <div id= "root"> ${content}</div>
                    <script src="clientBundle.js" ></script>
                </body>
            </html>
            `;

}