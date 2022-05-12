import React,{useState, useEffect} from "react"
import { useDropzone } from "react-dropzone"
import styled from 'styled-components';
import { Link } from "react-router-dom"

import "./tipoA.css"

import Header from '../../components/header/header'
import Logo from "../../assets/2.png"
import Button from "../../components/button/button"


const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  } 
  return '#bdbdbd';
}



const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: ${props => getColor(props)};
  outline: none;
  transition: border .24s ease-in-out;
`;

const handleUpload = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },

]

export default function TipoA() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  useEffect(()=>{
    document.title = `Você clicou ${uploadFile} vezes`
  })

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    
  
  } = useDropzone({ accept: { 'text/plain': [] }, maxFiles: '45' });

  
 

  const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);
  return (
    <div className="AppTA">
      <section className="cimaTA">
        <div className="logoTA">
          <Link to="/">
            <img className="imgTA" src={Logo} alt="" />
          </Link>
        </div>
        <header className="TopoTA">
          <Header />
        </header>
      </section>
      <body className="CorpoTA">
        <div className="NavTA">
          <Button className="btnTA" />
        </div>
        <div className="PrincipalTA">
          <div className="UploadTA">
            <div className="DisplaResultTA">
              <Container
                {...getRootProps({ isFocused, isDragActive, isDragAccept, isDragReject })}>
                <input {...getInputProps()} />
                {isDragAccept && (<p>Todos os arquivos serão aceitos</p>)}
                {isDragReject && (<p>Alguns arquivos serão rejeitados</p>)}
                {!isDragActive && (<p>Solte alguns arquivos aqui ou click aqui</p>)}
              </Container>
            </div>
            <div className="DisplayUploadTA">
              <h4>Arquivos importados</h4>
              <ul >{files}</ul>
            </div>
          </div>
          <div className="ResultadoTA" >
            teste
          </div>
        </div>
      </body>
    </div>
  )
}