import React, { useState, useEffect } from "react";
import clienteAxios from "../../config/clienteAxios";
import "./styles.scss";

function RutaB() {
  const usuario = localStorage.getItem("usuario");
  const idUsuario = JSON.parse(usuario);

  const [formularioPost, setFormlarioPost] = useState({
    titulo: "",
    descripcion: "",
    user: idUsuario,
  });

  const { titulo, descripcion } = formularioPost;

  const [imagen, setImagen] = useState({});
  const [video, setVideo] = useState({});
  const [todosPost, setTodosPost] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const respuesta = await clienteAxios.get("/posts");
      setTodosPost(respuesta.data);
      console.log(respuesta);
    };
    fecthData();
  }, []);

  const onChangePost = (e) => {
    setFormlarioPost({
      ...formularioPost,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeImagen = (e) => {
    setImagen({
      ...imagen,
      [e.target.name]: e.target.files[0],
    });
  };

  const onChangeVideo = (e) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.files[0],
    });
  };

  const onSubmitPost = async (e) => {
    e.preventDefault();
    if (titulo === "") {
      alert("Completa los campos");
      return;
    }
    await clienteAxios.post("/posts", formularioPost).then(async (data) => {
      console.log(data.data, "POST CREADO");
      alert("PUBLICACION SE HA CREADO")
      setFormlarioPost({
        titulo: "",
        descripcion: "",
        user: idUsuario,
      });
      if (data.data.id !== "") {
        let form = new FormData();
        form.append("data", imagen.imagen);
        await clienteAxios
          .post(`/imagen/${data.data.id}`, form)
          .then((data) => {
            console.log(data, "IMAGEN SUBIDA");
            setImagen({});
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (data.data.id !== "") {
        let formVideo = new FormData();
        formVideo.append("data", video.video);
        await clienteAxios
          .post(`/video/${data.data.id}`, formVideo)
          .then((data) => {
            console.log(data, "VIDEO SUBIDO");
            setVideo({});
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
  <>
  <section>
    <div className="contPublicacion">
      <form onSubmit={onSubmitPost}>
      <div className="flex">
        <div className="contInputs">
        
          <h1>Crear Publicacion</h1>
            <div className="titulo">
              <p>Título</p>
              <input
                className="tituloInterior"
                type="text"
                name="titulo"
                value={titulo}
                onChange={onChangePost}
              />
            </div>
            <div >
              <p>Descripción</p>
              <input
                className="des"
                type="text"
                name="descripcion"
                value={descripcion}
                onChange={onChangePost}
              />
            </div>

              <br />
            <div className="imagen">
            <p>Imagen</p>
              <input className="img"
                type="file"
                name="imagen"
                id="imagen"
                onChange={onChangeImagen}
              />

            </div>
              <br />
            <div className="video">
              <p>Video</p>
              <input type="file" name="video" id="video" onChange={onChangeVideo} />
            </div>
            <br />
            <button className="btn-crear" type="submit">Publicar</button>
          </div>
        </div>
      </form>

      
    </div>
    <div className="contPost">
    <h1>TODOS LOS POST</h1>

      <ul className="flexx">
        {todosPost.map((post) => (
          <li className="publicacion" key={post.id}>
            <p>{post.titulo}</p>
            <p>{post.descripcion}</p>
            <img className="" src={`http://localhost:8080${post.imagen}` } />
            <video width="220" height="240" controls>
              <source
                src={`http://localhost:8080${post.video}`}
                src="movie.mp4"
                type="video/mp4"
              />
              <source
                src={`http://localhost:8080${post.video}`}
                src="movie.ogg"
                type="video/ogg"
              />
             
            </video>
          </li>
        ))}
      </ul>
    </div>

        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        </section>
  </>
  );
}

export default RutaB;
