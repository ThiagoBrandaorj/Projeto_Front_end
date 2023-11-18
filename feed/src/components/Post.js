const Post = ({titulo, descricao, imagemURL1}) => {
    return(
        <div>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <img src={imagemURL1} alt="local 1"></img>
        </div>
    )
}

export default Post;