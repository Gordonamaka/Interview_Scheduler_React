import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";


export default function Appointment(props) {
  
  return (
    
    <article className='appointment'>
      <Fragment>
        <Header time={props.time}></Header>
        {props.interview ?
          <>
            <Show student={props.interview.student} interviewer={props.interview.interviewer.name}></Show>
          </>
          :
          <>
            <Empty></Empty>
          </>
        }
      </Fragment>
    </article>

);
}