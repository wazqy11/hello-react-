//����react������
import React from "react";
//����react-dom
import ReactDOM from "react-dom";
//����App���
import App from './App'
import {BrowserRouter} from "react-router-dom";


//��ȾApp��ҳ��
ReactDOM.render(<BrowserRouter>
                    {/*<App/>*/}
                    <App />
                </BrowserRouter>,document.getElementById('root'))
