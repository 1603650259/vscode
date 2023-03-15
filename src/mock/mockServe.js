import Mock  from "mockjs";
import video from './video.json'
Mock.mock('/mock/video',{code:200,data:video})