import styled from 'styled-components';


const Post = ({titulo, descricao, imagemUrl}) => {
    return(
        <>
        <div>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <img src={imagemUrl} alt="img 1"></img>
        </div>
        </>
    )
}

export default Post;