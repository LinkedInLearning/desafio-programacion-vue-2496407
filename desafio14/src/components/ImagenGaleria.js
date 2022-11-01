const ImagenGaleria = {
  setup(props) {
    return () => <img class="img-fluid" src={props.src}/>;
  }
};

export default ImagenGaleria;