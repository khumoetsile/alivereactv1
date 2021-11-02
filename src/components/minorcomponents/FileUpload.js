import React, {useContext} from 'react';
import Dropzone from 'react-dropzone';
import {UserContext} from '../../utils/UserContext'
import ButtonLight from './ButtonLight';
import { FileArrowUp, FileCheck, TrashFill } from 'react-bootstrap-icons'


const FileUpload = ({ handleDrop, files, multiple, setFiles }) => {
    const { miniPlayer } = useContext(UserContext);
    const deleteFile = (index) => {
        files.splice(index, 1);
        console.log(files, index)
        setFiles([...files])
    }

    return (
        <section className="container">
            <div className="row mt-4">
                <div className={miniPlayer ? "col-12" : "col-lg-2 col-md-4"}>
                    <Dropzone onDrop={handleDrop}>
                        {({ getRootProps, getInputProps }) => (

                            <div {...getRootProps()}
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    border: '2px dotted #0d6efd',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>

                                <FileArrowUp style={{ color: 'blue' }} />
                                <input {...getInputProps()} multiple={multiple}></input>
                                <p>Drag files here or click here to upload</p>
                            </div>
                        )}
                    </Dropzone>
                </div>
                <div className={miniPlayer ? "col-12 mt-3" : "col-md-8"}>
                    <ul className="list-group">
                        {files.map((file, index) => {


                            return (<li key={index} className="list-group-item text-primary">
                                <a href={URL.createObjectURL(file)} target="_blank" rel="noreferrer">
                                    <FileCheck />
                                    <span> {file.name} </span>
                                </a>
                                <ButtonLight type="button" text={<TrashFill />} onClick={() => deleteFile(index)} className="float-end p-0" />
                            </li>)
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default FileUpload
