import React from 'react';
import styled from "styled-components";


class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fileKind: this.props.value.kind,
            fileType: this.props.value.type,
            filePreviewURL: this.props.value.preview, 
            handleChangeFile: this.props.value.handleChangeFile, 
            handleUploadFile: this.props.value.handleUploadFile, 
        };
    }

    returnFilePreview = ({fileKind, filePreviewURL}) => {
        if (['video'].includes(fileKind)) {
            return (
                <>
                    <video width="500" height="500" controls>
                    <source src={filePreviewURL} type="video/mp4" />
                    </video>
                </>
            )
        } else { // '사진'
            return (
                <>
                    <img src = {filePreviewURL} alt = {filePreviewURL} width="500" height="500"/>
                </>
            )
        }
        
    }


    returnEmptyTag = () => {
        return (<></>)
    }

    render() {
        const {
            fileKind,
            fileType,
            filePreviewURL, 
            handleChangeFile, 
            handleUploadFile, 
        } = this.state

        return (
            <BContainer>
                    <Container>
                
                    <div>
                        <Backimg></Backimg>
                            <Backimg_2></Backimg_2>
                            <Backimg_3></Backimg_3>
                            <Backimg_4></Backimg_4>
                <h1>홈 화면</h1>
                <input
                    type="file"
                    id="upload-photo-button"
                    onChange={handleChangeFile}
                />
                <br />
                <button onClick={handleUploadFile}>사진/영상 업로드</button>
                <br / >
<<<<<<< HEAD
                {videoPreviewURL.length ? this.returnVideoPreview(videoPreviewURL) : this.returnEmptyTag()}
                </div>
                </Container>
            </BContainer>
            );
        }
=======
                {filePreviewURL.length ? this.returnFilePreview({fileKind, filePreviewURL}) : this.returnEmptyTag()}
            </>
        );
>>>>>>> upstream/develop
    }

const BContainer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #E5E5E5;
`;
const buttonimg = styled.div`

`;
const Styledbutton = styled.button`
 position: absolute;
width: 180px;
height: 180px;
left: 97px;
top: 186px;
border-radius: 50%;
background: #FFFFFF;
box-shadow: 0px 0px 30px rgba(248, 118, 91, 0.2);
`;

const Container = styled.div`
position: relative;
width: 375px;
height: 812px;
border: 2px solid black;
background: #FBFBFB;;
`;
const Backimg_2 = styled.div`
position: absolute;
width: 81px;
height: 81px;
left: 16px;
top: 313px;
border-radius: 50%;
background: rgba(222, 233, 255, 0.6);
`;
const Backimg_3 = styled.div`
position: absolute;
width: 337px;
height: 337px;
left: 97px;
top: -102px;
background: rgba(222, 233, 255, 0.25);
border-radius: 50%;
`;
const Backimg_4 = styled.div`

position: absolute;
width: 127px;
height: 127px;
left: 224px;
top: 159px;
border-radius: 50%;
background: rgba(222, 233, 255, 0.35);
`;
const Backimg = styled.div`
position: absolute;
width: 221px;
height: 221px;
left: -153px;
top: 159px;
border-radius: 50%;
background: #FFFF00;
background: rgba(222, 233, 255, 0.4);
`;

export default Home;