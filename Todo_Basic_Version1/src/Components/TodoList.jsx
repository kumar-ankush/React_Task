import React,{useState} from 'react';
import './Todo'
const TodoList = (props) => {
    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(!line);

      }
    return (
        <li className=" card shadow-sm list-group-item  text-center" style={{ textDecoration: line ? "line-through" : "none" }}>
                                                <div className="d-flex shift"> 
                                                    <div className="form-check">
                                                         <input type="checkbox" className="form-check-input" onChange={cutIt} />
                                                         {/*()=> checked(i) */}
                                                            {/* <label className="strikethrough"> */}
                                                            {/* <label className={props.data_checked ? 'checked' : 'unchecked'}> */}
                                                                
                                                                    {/* //data.checked */}
                                                              <div id="Text_placed">  {props.x} </div>
                                                               
                                                            {/* </label> */}
                                                                {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
                                                    </div> 
                                                </div>
                                                {/* ()=>deleteItems(i) */}
                                                        <img onClick={props.deleteItems} src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTQxNS4xNTggODUuNzU4Yy0uMjY4LjA4Ny05My45MzIgMjcuNjg2LTk0LjE5OCAyNy43NzctMTAuMDQxIDMuNDkzLTE2Ljc4OCAxMi45ODMtMTYuNzg4IDIzLjYxNHY0Mi4yMjNjMCA4LjI4NSA2LjcxNiAxNS4wMDEgMTUuMDAxIDE1LjAwMWgxMTQuMDA4YzguMjg1IDAgMTUuM
                                                        DAxLTYuNzE2IDE1LjAwMS0xNS4wMDF2LTY5LjkzNWMwLTE3LjA3Ny0xNi44MTctMjkuMTcyLTMzLjAyNC0yMy42Nzl6IiBmaWxsPSIjZmY1ZTk0Ii8+PHBhdGggZD0ibTE2MC4xNjEgMTY0LjM3MXYyODIuNjI0YzAgMzUuODQ0IDI5LjE2MSA2NS4wMDUgNjUuMDA1IDY1LjAwNWgxNTguMDEyYzM1Ljg0NCAwIDY1LjAwNS0yOS4xNjEgNjUuMDA1LTY1LjAwNSAwLTE1LjczNCAwLTI3NC43MzEgMC0yODIuNjI0eiIgZmlsbD0iIzlkY2ZmZiIvPjxwYXRoIGQ9Im0zMDQuMTcyIDE2NC4zNzF2MzQ3LjYyOWg3OS4wMDZjMzUuODQzIDAgNjUuMDA1LTI5LjE2MiA2NS4wMDUtNjUuMDA1di0yODIuNjI0eiIgZmlsbD0iIzcyYmJm
                                                        ZiIvPjxnIGZpbGw9IiM1YTVhNWEiPjxwYXRoIGQ9Im0yMzcuNDMxIDIzMy4zNzZjLTguMjg1IDAtMTUuMDAxIDYuNzE2LTE1LjAwMSAxNS4wMDF2MTc5LjYxNmMwIDguMjg1IDYuNzE2IDE1LjAwMSAxNS4wMDEgMTUuMDAxczE1LjAwMS02LjcxNiAxNS4wMDEtMTUuMDAxdi0xNzkuNjE2YzAtOC4yODUtNi43MTctMTUuMDAxLTE1LjAwMS0xNS4wMDF6Ii8+PHBhdGggZD0ibTMwNC4xNzEgMjMzLjM3NmMtOC4yODUgMC0xNS4wMDEgNi43MTYtMTUuMDAxIDE1LjAwMXYxNzkuNjE2YzAgOC4yODUgNi43MTYgMTUuMDAxIDE1LjAwMSAxNS4wMDFzMTUuMDAxLTYuNzE2IDE1LjAwMS0xNS4wMDF2LTE3OS42MTZjMC04LjI4NS0
                                                        2LjcxNi0xNS4wMDEtMTUuMDAxLTE1LjAwMXoiLz48L2c+PGcgZmlsbD0iIzQ0NCI+PHBhdGggZD0ibTMxOS4xNzIgMjQ4LjM4MXYxNzkuNjEzYzAgOC4yODEtNi43MiAxNS4wMDEtMTUuMDAxIDE1LjAwMXYtMjA5LjYxNWM4LjI4MSAwIDE1LjAwMSA2LjcxIDE1LjAwMSAxNS4wMDF6Ii8+PHBhdGggZD0ibTM3MC45MTIgMjMzLjM3NmMtOC4yODUgMC0xNS4wMDEgNi43MTYtMTUuMDAxIDE1LjAwMXYxNzkuNjE2YzAgOC4yODUgNi43MTYgMTUuMDAxIDE1LjAwMSAxNS4wMDFzMTUuMDAxLTYuNzE2IDE1LjAwMS0xNS4wMDF2LTE3OS42MTZjMC04LjI4NS02LjcxNi0xNS4wMDEtMTUuMDAxLTE1LjAwMXoiLz48L2c+PHBhdG
                                                        ggZD0ibTE5Mi4xNyAxOC4wN3MwIDAtLjAxIDBjLTE1LjMzNi05LjU4OC0zNi4wMTYtNy43OTMtNDkuNDYgNS42NXYuMDFsLTI3LjU4IDI3LjU3LTI3LjU4IDI3LjU4Yy0xNS42IDE1LjYtMTUuNiA0MC45OCAwIDU2LjU3bDE0LjE1IDE0LjE1IDIwLjMxLTIuMS45LTE5LjEyLTE0LjE0LTE0LjE0Yy0zLjktMy45LTMuOS0xMC4yNSAwLTE0LjE0bDI3LjU4LTI3LjU4IDI3LjU3LTI3LjU4aC4wMWMzLjY4OS0zLjY4OSAxMC4wMjUtNC4xMTYgMTQuMTMtLjAxbDE0LjE1IDE0LjE1IDE4LjU1LTMuMDggMi42Ny0xOC4xM2MtMTQuODA2LTE0LjgwNi0xNi40MS0xNi44MTgtMjEuMjUtMTkuOHoiIGZpbGw9IiM1YTVhNWEiLz48c
                                                        GF0aCBkPSJtMTkyLjE3IDE4LjA3czAgMC0uMDEgMGMtMTUuMjk3LTkuNTY0LTM1Ljk2OC03LjgzMS00OS40NiA1LjY2bC0yNy41OCAyNy41NyAyMS4yMiAyMS4yMiAyNy41OC0yNy41OGMzLjY4Ni0zLjY4NiAxMC4wMTctNC4xMjQgMTQuMTMtLjAxbDE0LjE1IDE0LjE1IDIxLjIyLTIxLjIxYy0xNS4yOTEtMTUuMjkxLTE2LjE2Mi0xNi41NzQtMjEuMjUtMTkuOHoiIGZpbGw9IiM0NDQiLz48cGF0aCBkPSJtMzE3LjQxOCAzNy4xMDgtMjYuODcyLTI2Ljg3MmMtMTMuNjQ3LTEzLjY0Ny0zNS44NTMtMTMuNjQ3LTQ5LjUwMSAwbC0xNjYuOTkyIDE2Ni45OTFjLTEzLjY0NyAxMy42NDctMTMuNjQ3IDM1Ljg1MyAwIDQ5LjUw
                                                        MWwyNi44NzIgMjYuODcyYzUuODU3IDUuODU4IDE1LjM1NiA1Ljg1OSAyMS4yMTQgMGwxOTUuMjc5LTE5NS4yNzhjNS44NTgtNS44NTggNS44NTgtMTUuMzU2IDAtMjEuMjE0eiIgZmlsbD0iIzNiYTlmZiIvPjxwYXRoIGQ9Im0yOTAuNTQ1IDEwLjIzNiAyNi44NzIgMjYuODcyYzUuODU1IDUuODU1IDUuODYyIDE1LjM1MiAwIDIxLjIxNWwtOTcuNjM3IDk3LjYzNy02Mi4yMy02Mi4yMyA4My40OTQtODMuNDk0YzEzLjY0OC0xMy42NDggMzUuODUzLTEzLjY0OCA0OS41MDEgMHoiIGZpbGw9IiMwMDgxZmYiLz48L2c+PC9nPjwvc3ZnPg==" /> 
                                            </li>
    );
}

export default TodoList;
