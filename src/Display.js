import React, { useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { atomData } from './recoil/atomData';
import { AddData } from './AddData';
import {Card} from "./stories/Card";
import "./Display.css"
import Dialog from "./Dialog"
export const Display = () => {
    const [list, setList] = useRecoilState(atomData);
    const [dialog,setDialog] = useState({
     message: "",
     isLoading: false,
    })

    console.log(list);
    
    const idProductRef = useRef();
    const handleDialog = (message, isLoading) =>{
        setDialog({
            message,
            isLoading
        })
    }

    const handleDelete = (id) =>{
        handleDialog('Are you sure you want to delete?',true)
        idProductRef.current = id;
    }

    const areUSureDelete = (choose) =>{
       if(choose){
        setList(list.filter(p=>p.id !== idProductRef.current));
        handleDialog('Are you sure you want to delete?',false)
        setDialog({
            message: "Are you sure you want to delete?",
            isLoading: true
        })
       }else{

       }
    }

    return (
        <div>
            <br></br>
            <AddData />
           
            <br></br>
            {list.length > 0 ? (list.map(info => {
                return (
                    <React.Fragment key={info.id}>
                        <Card text={info.text}/>
                        <button onClick={() => handleDelete(info.id)} 
                        className='del-button'>Delete</button>
                    </React.Fragment>
                )
            })) : (<></>)}
             {dialog.isLoading && <Dialog onDialog={areUSureDelete} message={dialog.message}/>}
        </div>
    )
}