import React, { useState, useEffect } from "react";
import clienteAxios from "../../config/clienteAxios";
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
    <div>
      <form onSubmit={onSubmitPost}>
        <p>Título</p>
        <input
          type="text"
          name="titulo"
          value={titulo}
          onChange={onChangePost}
        />
        <p>Descripción</p>
        <input
          type="text"
          name="descripcion"
          value={descripcion}
          onChange={onChangePost}
        />
        <br />

        <input
          type="file"
          name="imagen"
          id="imagen"
          onChange={onChangeImagen}
        />
        <label htmlFor="imagen">Subir Imagen</label>
        <br />

        <input type="file" name="video" id="video" onChange={onChangeVideo} />
        <label htmlFor="video">Subir Video</label>
        <br />
        <button type="submit">Crear Post</button>
      </form>

      <h1>TODOS LOS POST</h1>
      <ul>
        {todosPost.map((post) => (
          <li key={post.id}>
            <p>{post.titulo}</p>
            <p>{post.descripcion}</p>
            <img src={`http://localhost:8080${post.imagen}`} />
            {/* <video width="320" height="240" controls>
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
              Your browser does not support the video tag.
            </video> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RutaB;
