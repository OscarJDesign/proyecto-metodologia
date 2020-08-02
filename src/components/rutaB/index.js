import React, {Fragment, useState} from 'react';
import clienteAxios from "../../config/clienteAxios";
import {Link} from "react-router-dom";
// import "./styles.scss";

const RutaB = () => {
    let [file, setFile] = useState();
    const [filename, setFilename] = useState('Elegir Archivo');
    const [uploadedFile, setUploadedFile] = useState ({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        let form = new FormData();
        form.append('data', file);
        
        try{
            const res= await clienteAxios.post('/uploads', FormData, {
                headers: {
                    'Conten-Type' : 'multipart/form-data'
                }
            });
            const { fileName, filePath } = res.data;

            setUploadedFile({fileName, filePath});

        }catch(err){

        }
    }

    return (
        <Fragment>
        <div class="container">
            <h1>Crear una Publicacion</h1>
                <form className="formulario" onSubmit={onSubmit}>
                    <div className="cont">
                        <div class="wrapper">
                            <div class="image"></div>
                        </div>
                        <div className="input">
                            <input className="btn-input" type="file" id='customFile' onChange={onChange}></input>
                            <label className="file-name" htmlFor='customFile'>{filename}</label>
                        </div>
                    </div>
                    <input type='submit' value="Upload"></input>
                </form>
            </div>   
        </Fragment>
    );
};

export default RutaB;